import { TransactionsDB } from "../db/db";
import TransactionsTable from "../components/tables/TransactionsTable"
import TransactionForm from "../components/add-components/TransactionForm"
import { useState } from "react";


export default function TransactionPage() {

    const [modalVisibility, setModalVisibility] = useState(false);
    const [rows, setRows] =useState(TransactionsDB)
    
    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((_, index)=> index !== targetIndex))
    }

    const handSubmit = (newRow) => {
        setRows([...rows, newRow])
    }

    return(
        <div className="d-flex flex-column">
            <h1 className="page-title">TRANSACTIONS</h1>
            <TransactionsTable rows={rows} deleteRow={handleDeleteRow}/>
            <button className="btn btn-warning rounded" onClick={() => setModalVisibility(true)}><strong>ADD NEW TRANSACTION</strong></button>
            { modalVisibility && <TransactionForm onSubmit={handSubmit} close={() => setModalVisibility(false)}/>}
        </div>
    )
}