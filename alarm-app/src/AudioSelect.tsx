import { useState, type ChangeEvent } from "react";

export default function AudioSelect () {

        const [sound, setSound] = useState("");

        function handleSound(e: ChangeEvent<HTMLSelectElement>) {
            setSound(e.target.value)
        }
        return(
        <div className="flex flex-col gap-3">
        <label htmlFor="audio-select">Pick an alarm sound:</label>
        <select onChange={handleSound} className = 'border-2 text-center' name="audio-select" id="audio-select">
        <option value="audio-1">Audio 1</option>
         <option value="audio-2">Audio 2</option>
          <option value="audio-3">Audio 3</option>
           <option value="audio-4">Audio 4</option>
        </select>

        <p>You picked: {sound} </p>
        </div>
    );

}


