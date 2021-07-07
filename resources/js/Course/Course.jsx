import {Link } from "react-router-dom";

function Course(props) {
    
    

    return (
            <div className="course1">
                <Link to={`/course/${props.course.id}`}>TEST</Link>
                <h4>{props.course.title}</h4>
                <button className="buttonplay"></button>
                <div className="course_name">
                    <p>{props.course.description}</p>
                </div>
                <img src="" />
            </div>   
    )
}

export default Course;