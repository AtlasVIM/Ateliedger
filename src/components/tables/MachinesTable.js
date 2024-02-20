import { useState } from 'react'
import { TransactionsDB } from '../../db/db.js'

export default function MachinesTable() {
    const [editVisible, setEditVisibility] = useState(false)

    return(
       <div>
            <table className="table align-middle table-dark">
                <thead>
                    <tr className='table-row'>
                        <th scope="col">NAME</th>
                        <th scope="col">VARIABLE COSTS</th>
                    </tr>
                </thead>
                <tbody>
        {TransactionsDB.filter((transaction) => { return transaction.type === 'Machines'}).map( (machine) => {
            return(
                <tr>
                    <th>{machine.name}</th>
                    <td>{machine.variableCosts.map((cost) => {return(<p>{cost.costTitle + ' : ' + cost.costPerUnit}</p>)})}</td>
                    <td><button className='btn btn-light' onClick={() => {setEditVisibility(!editVisible)}}>{editVisible ? 'GO BACK': 'EDIT'}</button></td>
                    {editVisible && <td><select>{machine.variableCosts.map((type) => {return(<option>{type.costTitle}</option>)})}</select></td>}
                    {editVisible && <td><input></input></td>}
                     {editVisible && <td><button className='btn btn-light'>SAVE</button></td>}
                </tr>
                )
        })}
                </tbody>
            </table>
        </div>
    )

}