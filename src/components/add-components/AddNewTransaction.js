import { TypeDB, TransactionTypeDB } from "../../db/db"
import { useState } from "react"

export default function AddNewTransaction({close}) {

    const [formState, setFormState] = useState({
        date: '',
        transaction: 'payment',
        description: '',
        type: 'products',
        ammount: '',
        quantity: ''
    })

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
    }


    return(
        <div className="modal-container" onClick={(e) => {if(e.target.className === 'modal-container') close()}}>
            <div className="modal-box">
            <form>
                <div className="form-group d-flex flex-column ">
                    <label>DATE</label>
                    <input type="date" name="date" value={formState.date} onChange={handleChange}/>
                </div>
                <div className="form-group d-flex flex-column ">
                    <label>TRANSACTION</label>
                    <select name="transaction" value={formState.transaction} onChange={handleChange}>
                        {TransactionTypeDB.map( (transaction) => {return(<option value={transaction.toLowerCase()}>{transaction}</option>)})}
                    </select>
                </div>
                <div className="form-group d-flex flex-column ">
                    <label>DESCRIPTION</label>
                    <textarea type="description" name="description" value={formState.description} onChange={handleChange}/>
                </div>
                <div className="form-group d-flex flex-column ">
                    <label>TYPE</label>
                    <select name="type" value={formState.type} onChange={handleChange}>
                        {TypeDB.map( (type) => {return(<option value={type.toLowerCase()}>{type}</option>)})}
                    </select>
                </div>
                <div className="form-group d-flex flex-column ">
                    <label>TOTAL AMMOUNT</label>
                    <input type="number" name="ammount" value={formState.ammount} onChange={handleChange}/>
                </div>
                <div className="form-group d-flex flex-column ">
                    <label>QUANTITY</label>
                    <input type="number" name="quantity" value={formState.quantity} onChange={handleChange}/>
                </div>
                <button className="btn btn-light shadow rounded" type="submit" onClick={handleSubmit}>SUBMIT</button>
            </form>
            </div>
        </div>
    )
}