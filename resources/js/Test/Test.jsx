import Question from "../Question/Question";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Results from '../Results/Results';

export default function Test() {
    let { course_id } = useParams();

    const [test, setTest] = useState(null)

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


    return (
        <>
        <div className="quiz">
     
      {
          test != null ? (
                <Question test={test}/> 
          ) : null
      }
                
     
    </div>
        <Results/>
        </>
    )
}