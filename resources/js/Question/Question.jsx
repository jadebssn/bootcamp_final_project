import Option from "../Option/Option";

export default function Question(props) {

    console.log(props.test.questions)
 
    return (
        <div className="quiz-question">
            {props.test.questions?.map((question, i) => (
                <div key={i}>
                    <p>{question.text}</p>
                    <Option question={question} />
                </div>
            ))}
            
           
        </div>
    )
}