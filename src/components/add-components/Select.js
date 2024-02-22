
export default function Select({formState, changeHandler, optionDB, label, name}) {
    return(
                <div className="form-group d-flex flex-column ">
                    <label className="font-semibold capitalize">{label}</label>
                    <select className="form-select" name={name} value={formState.type} onChange={changeHandler} required>
                        <option selected disabled value={''}>Select...</option>
                        {optionDB.map( (option) => {return(<option value={option.toLowerCase()}>{option}</option>)})}
                    </select>
                </div>
    )
}