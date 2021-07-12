import Option from "../Option/Option";

export default function Question(props) {

    console.log(props.test.questions)
 
    return (
        <div>
            {props.test.questions?.map((question, i) => (
                <>
                <p key={i}>{question.text}</p>
                    <Option question={question} />
                </>
            ))}
            
           
        </div>
    )
}