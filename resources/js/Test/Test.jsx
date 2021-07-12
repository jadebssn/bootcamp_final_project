import Question from "../Question/Question";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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

    console.log(test.questions)
    return (
        <div className="test">
            <Question test={test}/>
            <Link to="/courses">Courses</Link>
        </div>
    )
}