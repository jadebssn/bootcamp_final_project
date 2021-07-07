import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CourseDetail() {
    let { id } = useParams();
    
    const [course, setCourse] = useState(null)

    const loadCourse = async () => {
        const response = await fetch(`api/course/${id}`)
        const data = await response.json();

        setCourse(data);
    }

    useEffect(() => {

        loadCourse();

    }, [id]);

    console.log(course)

    return (
        <div>
            hi
        </div>
    )
}