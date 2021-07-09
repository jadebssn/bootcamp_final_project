import Question from "../Question/Question";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Test() {
    let { course_id } = useParams();

    const [test, setTest] = useState([])

    const loadTestList = async () => {
        const response = await fetch(`/api/test/${course_id}`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();

        setTest(data);
    }

    useEffect(() => {

        loadTestList();

    }, []);

    console.log(test)
    return (
        <div>
            <Question test={test}/>
        </div>
    )
}