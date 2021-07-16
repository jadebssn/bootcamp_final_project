import {Link } from "react-router-dom";

function Course(props) {
    
    

    return (
            <div className="course1">
            <Link className="course__title" to={`/course/${props.course.id}`}>{props.course.title}</Link>
            <img className="course__img" src={props.course.img} />
                <div className="course_name">
                    
                    <p>{props.course.description}</p>
                    
                </div>
                
            </div>   
    )
}

export default Course;