import { TransactionsDB } from "../db/db";
import TransactionsTable from "../components/tables/TransactionsTable"
import AddNewTransaction from "../components/add-components/AddNewTransaction"
import { useState } from "react";


export default function TransactionPage() {

    const [modalVisibility, setModalVisibility] = useState(false);
    const [rows, setRows] =useState(TransactionsDB)
    
    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((_, index)=> index !== targetIndex))
    }

    return(
        <div className="d-flex flex-column">
            <h1 className="page-title">TRANSACTIONS</h1>
            <TransactionsTable rows={rows}/>
            <button className="btn btn-warning rounded" onClick={() => setModalVisibility(true)}><strong>ADD NEW TRANSACTION</strong></button>
            { modalVisibility && <AddNewTransaction close={() => setModalVisibility(false)}/>}
        </div>
    )
}