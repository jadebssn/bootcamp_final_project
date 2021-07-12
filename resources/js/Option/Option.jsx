import { useState } from "react";

export default function Options(props) {

    const [option, setOption] = useState(0)

 

    console.log(option)


    return (
        <>
            {
                props.question.options.map((option, i) => (
                <p key={option.id} onClick={()=> {setOption(option.is_correct)}}>{option.text}</p>
            ))}
        </>
    )
}