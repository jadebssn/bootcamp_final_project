import {Link } from "react-router-dom";

function Course(props) {
    
    

    return (
            <div className="course1">
            <Link to={`/course/${props.course.id}`}>{props.course.title}</Link>
           
                <div className="course_name">
                    <p>{props.course.description}</p>
                </div>
                <img src="" />
            </div>   
    )
}

export default Course;