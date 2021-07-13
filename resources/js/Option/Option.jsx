
export default function Options(props) {

    return (
        <div>
            <ul>
            {
                props.question.options.map((option, i) => (
                    <li
                        className={ option.id === props.listOptionId ? "quiz-answer-selected" :  "quiz-answer" }
                        key={option.id}
                        onClick={()=> {
                           props.setListOptionId([...props.listOptionId, option.id]);
                        }}   
                    >{option.text}</li>
                ))
            }
            </ul>
          
        </div>
    )
}