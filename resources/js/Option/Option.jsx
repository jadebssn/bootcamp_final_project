import { useState } from "react"
export default function Options(props) {

    const [options, setOptions] = useState([])

    const loadOptions = async () => {
        const response = await fetch(`/api/test/${course_id}/${option_id}`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();

        setOptions(data);
    }


    return (
        <>
            {
                props.question.options.map((option, i) => (
                <p key={i}>{option.text }</p>
            ))}
        </>
    )
}