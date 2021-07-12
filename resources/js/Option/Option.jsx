import { useState } from "react";

export default function Options(props) {
    

    const [optionId, setOptionId] = useState(0)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('my_token');

        const response = await fetch(`/api/submit/${optionId}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                'Authorization': `Bearer ${token}`
            },
        })

        const data = await response.json();

        if (data.errors) {
            // display errors ...
        }
    }

    console.log(optionId)

    return (
        <div>
            {
                props.question.options.map((option, i) => (

                <ul>
                    <li className="quiz-answer" key={option.id} onClick={()=> {setOptionId(option.id)}}>{option.text}</li>
                </ul>
            ))}
            <span><button className="button" onClick={handleSubmit}>Submit answer</button></span>

        </div>
    )
}