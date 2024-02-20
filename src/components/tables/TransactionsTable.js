import { useState } from "react";
import { TransactionsDB } from "../../db/db";


const getUniqueValues = function(data) {
    let uniqueValues = data
    .map((transaction) => transaction.type)
    .filter((value, index, currentValue) => currentValue.indexOf(value)===index)
    console.log(uniqueValues)
    return uniqueValues;
}
const getUniqueTransactionTypes = function(data) {
    let uniqueValues = data
    .map((transaction) => transaction.transactionType)
    .filter((value, index, currentValue) => currentValue.indexOf(value)===index)
    console.log(uniqueValues)
    return uniqueValues;
}

export default function TransactionsTable() {
    
    const [editVisible, setEditVisibility] = useState(false)
    const [typeFilter, setTypeFilter] = useState('')
    const [nameFilter, setNameFilter] = useState('')
    const [transactionTypeFilter, setTransactionTypeFilter] = useState('')

    return(
        <div className="container-fluid">
            <span>
            <button className="btn btn-light" onClick={() => {setEditVisibility(!editVisible)}}>{editVisible ? 'GO BACK' : 'EDIT'}</button>
            <button className="btn btn-warning">ADD NEW TRANSACTION</button>
            {editVisible && <button className='btn btn-danger'>SAVE</button>}
            <select className="custom-select" onChange={(e) => setTypeFilter(e.target.value)} ><option id="filter-type-all">All Items</option> {getUniqueValues(TransactionsDB).map((type) => {return (<option id={'filter-type-'+type}>{type}</option>)})}</select>
            <select className="custom-select" onChange={(e) => setTransactionTypeFilter(e.target.value)} ><option id="filter-type-all">All Transactions</option> {getUniqueTransactionTypes(TransactionsDB).map((transactionType) => {return (<option id={'filter-type-'+transactionType}>{transactionType}</option>)})}</select>
            <input type="text" placeholder="Search" onChange={(e) => setNameFilter(e.target.value)}></input>
            </span>
            <table className="table align-middle table-dark">
                <thead>
                    <tr>
                        <th scope="col">DATE</th>
                        <th scope="col">TRANSACTION</th>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">TYPE</th>
                        <th scope="col">VARIABLE COSTS</th>
                        <th scope="col">FIXED COSTS</th>
                        <th scope="col">EDIT/DELETE</th>
                        {editVisible && <th>CHANGE VARIABLE COST</th>}
                        {editVisible && <th>CHANGE FIXED COST</th>}
                    </tr>
                </thead>
                <tbody>
                    {TransactionsDB
                    .filter((transaction) => {
                        return typeFilter === 'All Items' ? transaction : transaction.type.includes(typeFilter)
                    })
                    .filter((transaction) => {
                        return transactionTypeFilter === 'All Transactions' ? transaction : transaction.transactionType.includes(transactionTypeFilter)
                    })
                    .filter((transaction) => {
                        return nameFilter.toLowerCase() === '' ? transaction : transaction.name.toLowerCase().includes(nameFilter)
                    })
                    .map((transaction) => {
                        return(
                            <tr key={transaction.id}>
                                <td>{transaction.date}</td>
                                <td>{transaction.transactionType}</td>
                                <th>{transaction.name}</th>
                                <td>{transaction.type}</td>
                                <td>{transaction.variableCosts.map((cost) => {return(<p><strong>{cost.costTitle}</strong>{' : '+cost.costPerUnit}</p>)})}</td>
                                <td>{transaction.fixedCosts.map((cost) => {return(<p><strong>{cost.costTitle}</strong>{' : '+cost.costPerUnit}</p>)})}</td>
                                <td>
                                    <span className="delete-edit-box">
                                        <img width={20} alt="edit" src="icons/edit-svg.svg"/>
                                        <img width={20} alt="delete" src="icons/delete-svg.svg"/>
                                    </span>
                                </td>
                                {editVisible && <td>{transaction.variableCosts.map((type) => {return(<div><input placeholder={type.costTitle} type="number"></input></div>)})}</td>}
                                {editVisible && <td>{transaction.fixedCosts.map((type) => {return(<div><input placeholder={type.costTitle} type="number"></input></div>)})}</td>}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}