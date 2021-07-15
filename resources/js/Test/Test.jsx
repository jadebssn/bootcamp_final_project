import Question from "../Question/Question";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Results from '../Results/Results';

export default function Test() {
    let { course_id } = useParams();

    const [test, setTest] = useState(null)
    const [displayResults, setDisplayResults] = useState(false)
    const [testUserId, setTestUserId] = useState(null)
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

    const resultsReady = (test_user_id) => {
setTestUserId(test_user_id);
        setDisplayResults(true);
        
        console.log(test_user_id)
}
    return (
        <>
        <div className="quiz">
     
      {
          test != null ? (
                <Question test={test} resultsReady={resultsReady}/> 
          ) : null
      }
                
     
    </div>
        {displayResults?<Results testUserId={testUserId}/>:''}
        </>
    )
    
}