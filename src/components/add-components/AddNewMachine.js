
export default function AddNewMachine() {
    return(
        <form method="post">
            <label>
                NAME:
                <input name="name"></input>
            </label>
            <button type="submit">ADD NEW MACHINE</button>
        </form>
    )
}