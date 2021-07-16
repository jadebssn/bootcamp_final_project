import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Video from "../Video/Video";

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
                    <div className="coursedescription__wrap">
                        <h4 className="coursedetail__title">{course?.title}</h4>
                        <p className="coursedetail__description">{course?.description}</p>
                    </div>
                <Video embedId={course?.video}/>
                
                <br />
                <br />
                <div className="navBottom">
                    <Link to={`/course/${course?.id}/test`} className="buttonBottom">TEST YOUR KNOWLEDGE!</Link>
                </div>

            </div>
        )
    }
