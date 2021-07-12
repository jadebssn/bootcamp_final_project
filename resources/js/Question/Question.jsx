import Option from "../Option/Option";

export default function Question(props) {

    console.log(props.test.questions)
 
    return (
        <div>
            {props.test.questions?.map((question, i) => (
                <div key={i}>
                    <p>{question.text}</p>
                    <Option question={question} />
                </div>
            ))}
            
           
        </div>
    )
}