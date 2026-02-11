import { useState, type ChangeEvent} from "react"
export default function UserTextInput() {
    const [task, setTask] = useState("");
    function handleChange(e:ChangeEvent<HTMLInputElement>) {
        setTask(e.target.value)
    }
    return(
        <div className="flex justify-center flex-col gap-2">
        <label htmlFor="userText">What do you need to do?</label>
        <input className="border-3" type="text" 
        value={task}
        onChange={handleChange}
        name="userText" 
        id="userText" />

        <p>You typed: {task}</p>
        </div>
    )
}