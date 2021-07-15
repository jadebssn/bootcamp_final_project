import { useState, useEffect } from "react";
export default function Results(props) {

    const [result, setResults] = useState(null)
useEffect(() => {

        loadResults();

    }, []);

const loadResults = async () => {
    const token = localStorage.getItem('my_token');
    console.log(props)
    const response = await fetch(`/api/results/${props.testUserId}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        const data = await response.json();

        setResults(data);
}    
console.log(result)

        return (
            result ? (
            // <p>Your score is {result.score} / {result.max}</p>): ''
            <div className="result">
                <p>Your score is </p> 
                {result.map((result, i) => (<p className="result__number">{result.score} </p>))}
                
            </div>
            
            ): ''
        )

}