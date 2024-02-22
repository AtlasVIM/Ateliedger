import { TypeDB, TransactionTypeDB } from "../../db/db"
import { useState} from "react"
import { Input } from "./Input"
import Select from "./Select"
import { FormProvider, useForm } from "react-hook-form"


export default function TransactionForm({close, onSubmit}) {

    const formFunctions = useForm()

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
        console.log(e.target.name + ':' + e.target.value)
        console.log(formState)
    }

    const handleSubmit = (e) => {
        formFunctions.handleSubmit(formState => {
            console.log(formState)
        })
        e.preventDefault();
        e.stopPropagation()
        
        onSubmit(formState)
        console.log(formState)
    }
    

    return(
        <div className="modal-container" onClick={(e) => {if(e.target.className === 'modal-container') close()}}>
            <div className="modal-box">
                <FormProvider {...formFunctions}>

            <form className="needs-validation" noValidate onSubmit={(e) => {e.preventDefault()}}>
                <div className="form-group d-flex flex-column ">
                    <label className="form-label">DATE</label>
                    <input type="date" name="date" className="form-control" value={formState.date} onChange={handleChange} required/>
                </div>
                <Select changeHandler={handleChange} optionDB={TransactionTypeDB} formState={formState} label={'TRANSACTION'} name={'transaction'}/>
                <div className="form-group d-flex flex-column ">
                    <label  className="form-label">DESCRIPTION</label>
                    <textarea type="description" className='form-control'  name="description" value={formState.description} onChange={handleChange} required/>
                </div>
                <Select changeHandler={handleChange} optionDB={TypeDB} formState={formState} label={'TYPE'} name={'type'}/>
                <Input label={'TOTAL AMMOUNT'} name='ammount' type={'number'} id={'transaction-modal-ammount'} placeholder={'Ammount'} changeHandler={handleChange}/>
                <Input label={'QUANTITY'} name="quantity" type={'number'} id={'transaction-modal-quantity'} placeholder={'Quantity'} changeHandler={handleChange}/>
                <button className="btn btn-light shadow rounded" type="submit" onClick={handleSubmit}>SUBMIT</button>
            </form>
                </FormProvider>
            </div>
        </div>
    )
}