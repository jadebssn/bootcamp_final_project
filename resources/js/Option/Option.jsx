import { useState } from "react";

export default function Options(props) {
    

    const [optionId, setOptionId] = useState(0)
    const [className, setClassName] = useState("quiz-answer")

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
    const changingBackground = () => {
        if (className === "quiz-answer") {
            setClassName ("quiz-answer-selected")
        } else {setClassName("quiz-answer")}
    }

    return (
        <div>
            <ul>
            {
                props.question.options.map((option, i) => (
                    <li
                        className={ option.id === optionId ? "quiz-answer-selected" :  "quiz-answer" }
                        key={option.id}
                        onClick={()=> {
                            setOptionId(option.id);
                        }}   
                    >{option.text}</li>
                ))
            }
            </ul>
            <span><button className="button" onClick={handleSubmit}>Submit answer</button></span>
        </div>
    )
}