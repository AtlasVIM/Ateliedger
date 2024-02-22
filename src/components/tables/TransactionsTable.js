import { useState } from "react";
import { TransactionsDB } from "../../db/db";

const getUniqueValues = function(data) {
    return data
    .map((transaction) => transaction.type)
    .filter((value, index, currentValue) => currentValue.indexOf(value)===index)
}   

const getUniqueTransactionTypes = function(data) {
    return data
    .map((transaction) => transaction.transactionType)
    .filter((value, index, currentValue) => currentValue.indexOf(value)===index)
}

export default function TransactionsTable({rows}) {

    const [typeFilter, setTypeFilter] = useState('')
    const [nameFilter, setNameFilter] = useState('')
    const [transactionTypeFilter, setTransactionTypeFilter] = useState('')

    return(
        <div className="container-fluid">
            <span>
            <select className="custom-select" onChange={(e) => setTypeFilter(e.target.value)} ><option id="filter-type-all">All Items</option> {getUniqueValues(TransactionsDB).map((type) => {return (<option id={'filter-type-'+type}>{type.charAt(0).toUpperCase()+type.slice(1)}</option>)})}</select>
            <select className="custom-select" onChange={(e) => setTransactionTypeFilter(e.target.value)} ><option id="filter-type-all">All Transactions</option> {getUniqueTransactionTypes(TransactionsDB).map((transactionType) => {return (<option id={'filter-type-'+transactionType}>{transactionType.charAt(0).toUpperCase()+transactionType.slice(1)}</option>)})}</select>
            <input type="text" placeholder="Search" onChange={(e) => setNameFilter(e.target.value)}></input>
            </span>
            <table className="table align-middle table-dark table-hover rounded shadow">
                <thead>
                    <tr>
                        <th className="text-center" scope="col">DATE</th>
                        <th className="text-center" scope="col">TRANSACTION</th>
                        <th className="text-center" scope="col">DESCRIPTION</th>
                        <th className="text-center" scope="col">TYPE</th>
                        <th className="text-center" scope="col">QUANTITY</th>
                        <th className="text-center" scope="col">TOTAL AMMOUNT</th>
                        <th className="text-center" scope="col">EDIT/DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {rows
                    .filter((transaction) => {
                        return typeFilter === 'All Items' ? transaction : transaction.type.includes(typeFilter)
                    })
                    .filter((transaction) => {
                        return transactionTypeFilter === 'All Transactions' ? transaction : transaction.transactionType.includes(transactionTypeFilter)
                    })
                    .filter((transaction) => {
                        return nameFilter.toLowerCase() === '' ? transaction : transaction.name.toLowerCase().includes(nameFilter.toLowerCase())
                    })
                    .map((transaction) => {
                        return(
                            <tr key={transaction.id}>
                                <td className="text-center">{transaction.date}</td>
                                <td className="text-center">{transaction.transactionType.charAt(0).toUpperCase()+transaction.transactionType.slice(1)}</td>
                                <th>{transaction.name}</th>
                                <td className="text-center">{transaction.type.charAt(0).toUpperCase()+transaction.type.slice(1)}</td>
                                <td className="text-center">{transaction.quantity}</td>
                                <td className="text-center">{transaction.ammount}</td>
                                <td>
                                    <span className="delete-edit-box">
                                        <button><img width={20} alt="edit" src="icons/edit-svg.svg"/></button>
                                        <button><img width={20} alt="delete" src="icons/delete-svg.svg"/></button>
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}