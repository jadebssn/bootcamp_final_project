import {Link } from "react-router-dom";

function Course(props) {
    
    

    return (
        <div>
            <Link to={`/course/${props.course.id}`}>TEST</Link>


           <div>{props.course.title}</div>
                <p>{props.course.description}</p>
                
        </div>
        
    )
}

export default Course;