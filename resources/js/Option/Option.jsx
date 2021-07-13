
export default function Options(props) {

    return (
        <div>
            <ul>
            {
                props.question.options.map((option, i) => (
                    <li
                        className={ option.id === props.listOptionId[ props.questionNumber] ? "quiz-answer-selected" :  "quiz-answer" }
                        key={option.id}
                        onClick={()=> {

                            console.log('set option', props.questionNumber, option.id );

                            props.setListOptionId(
                                props.listOptionId.map( (old, index) => index === props.questionNumber ? option.id : old )
                            )
                          // props.setListOptionId([...props.listOptionId, option.id]);
                        }}   
                    >{option.text}</li>
                ))
            }
            </ul>
          
        </div>
    )
}