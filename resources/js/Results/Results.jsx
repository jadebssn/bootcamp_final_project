import { useState, useEffect } from "react";
export default function Results() {
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

}