import Option from "../Option/Option";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Question(props) {

    const [listOptionId, setListOptionId] = useState( (new Array(props.test.questions.length)).fill(null));



 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('my_token');

        const response = await fetch(`/api/submit/${props.test.id}`, {
            method: 'POST',
            body: JSON.stringify({options: listOptionId}),
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
    console.log(listOptionId);
 
    return (
        <div className="quiz-question">
            {props.test.questions?.map((question, i) => (
                <div key={i}>
                    <p>{question.text}</p>
                    <Option question={question} questionNumber={i} setListOptionId={setListOptionId} listOptionId={listOptionId}
                    />
                </div>
            ))}
            <span><button className="button" onClick={handleSubmit}>Submit answer</button></span>
           
        </div>
    )
}