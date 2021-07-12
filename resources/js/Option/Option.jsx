import { useState } from "react";

export default function Options(props) {

    const [optionId, setOptionId] = useState(0)

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(``, {
            method: 'POST',
            body: JSON.stringify(optionId),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
        })

        const data = await response.json();

        if (data.errors) {
            // display errors ...
        }
    }

    console.log(optionId)

    return (
        <>
            {
                props.question.options.map((option, i) => (
                <p key={option.id} onClick={()=> {setOptionId(option.id)}}>{option.text}</p>
            ))}
            <button onClick={handleSubmit}>Submit answer</button>
        </>
    )
}