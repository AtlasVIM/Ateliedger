import { useState } from 'react'
import { TransactionsDB } from '../../db/db.js'

export default function MachinesTable() {

    const [nameFilter, setNameFilter] = useState('')
    
    return(
       <div>
            <input type="text" placeholder="Search" onChange={(e) => setNameFilter(e.target.value)}></input>
            <table className="table align-middle table-dark">
                <thead>
                    <tr className='table-row'>
                        <th scope="col">NAME</th>
                        <th scope="col">VARIABLE COSTS</th>
                        <th scope="col">FIXED COSTS</th>
                        <th scope="col">EDIT/DELETE</th>
                    </tr>
                </thead>
                <tbody>
        {TransactionsDB.filter((transaction) => { return transaction.type === 'Machines'})
        .filter((transaction) => {
            return nameFilter.toLowerCase() === '' ? transaction : transaction.name.toLowerCase().includes(nameFilter.toLowerCase())
        })
        .map( (machine) => {
            return(
                <tr key={machine.id}>
                    <th>{machine.name}</th>
                    <td>{machine.variableCosts.map((cost) => {return(<p><strong>{cost.costTitle}</strong>{' : ' + cost.costPerUnit}</p>)})}</td>
                    <td>{machine.fixedCosts.map((cost) => {return(<p><strong>{cost.costTitle}</strong>{' : ' + cost.costPerUnit}</p>)})}</td>
                    <td>
                        <span className="delete-edit-box">
                                <img width={20} alt="edit" src="icons/edit-svg.svg"/>
                                <img width={20} alt="delete" src="icons/delete-svg.svg"/>
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