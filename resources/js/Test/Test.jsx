import Question from "../Question/Question";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Test() {
    let { course_id } = useParams();

    const [test, setTest] = useState([])

    const loadTestList = async () => {

        const token = localStorage.getItem('my_token');
        
        const response = await fetch(`/api/test/${course_id}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
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
        <>
        <div className="quiz">
      {/* <h2>{Coursetitle}: Test your knowledge!</h2> */}
      <Question test={test}/>
      {/* <div className="button__container"> */}
        <span><Link to="/courses" className="button">Courses</Link></span>
        
      {/* </div> */}
    </div>
        {/* <div className="test">
            <Question test={test}/>
            
        </div> */}
        </>
    )
}