import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function CourseDetail(props) {
    

    

    
        let { id } = useParams();
    
        const [course, setCourse] = useState(null)

        const loadCourse = async () => {
            const response = await fetch(`/api/course/${id}`, {
                headers: {
                    "Accept": "application/json"
                }
            });
            const data = await response.json();

            setCourse(data);
        }

        useEffect(() => {

            loadCourse();

        }, [id]);

        console.log(course)

        return (
            <div className="courseDetail">
                <h4>{course?.title}</h4>
                <p>{course?.description}</p>
                <div className="navBottom">
                    <Link to="/courses" className="buttonBottom">Courses</Link>
                    <Link to={`/course/${course?.id}/test`} className="buttonBottom">TEST</Link>
                </div>

            </div>
        )
    }
