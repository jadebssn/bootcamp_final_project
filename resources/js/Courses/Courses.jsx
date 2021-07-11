
import Course from "../Course/Course";
import { useState, useEffect } from "react";


export default function Courses(props) {
    const [coursesList, setCoursesList] = useState([])

    const loadCoursesList = async () => {
        const response = await fetch('/api/courses/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();

        setCoursesList(data);
    }

    useEffect(() => {

        loadCoursesList();

    }, []);


    return (
        
        <div className="courses_container">
            {coursesList.map((course, i) => (<Course key={i} course={course} />))}
        </div>
    
    )

    
}

