import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logout from "../Auth/Logout/Logout";
import { useParams } from "react-router-dom";

export default function Question(props) {
    // let { id } = useParams();
    const [questionList, setQuestionList] = useState([])

    const loadQuestionList = async () => {
        const response = await fetch('/api/question', {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();

        setQuestionList(data);
    }

    useEffect(() => {

        loadQuestionList();

    }, []);
    // console.log(questionList);
    return (
        <div>
            <p>{questionList[0]?.text}</p> 
            <Link to="/courses">Courses</Link>
            <Logout logoutCallback={props.logoutCallback} />
        </div>
    )
}