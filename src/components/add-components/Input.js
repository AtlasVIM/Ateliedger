import { useFormContext } from "react-hook-form"

export const Input = ({ label, type, id, placeholder, name, changeHandler }) => {

    const {register} = useFormContext()

  return (
    <div className="flex flex-col w-full gap-2 input form-group">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
      </div>
      <input
        id={id}
        type={type}
        className="input"
        placeholder={placeholder}
        name={name}
        onChange={changeHandler}
        {...register(label, {
            required: {
                value: true,
                message: 'required'
            }
        })}
      />
    </div>
  )
}