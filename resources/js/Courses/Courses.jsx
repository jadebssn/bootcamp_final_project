import Logout from "../Auth/Logout/Logout";
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
        <div>
        <h1>Courses</h1>
        <Logout logoutCallback={props.logoutCallback} />
        

            {coursesList.map((course, i) => (<Course key={i} course={course} />))}
            
            
            {/* {new Array(4).fill(null).map((course, i) => (<Course course={course} />))} */}

        
        </div>
    )

    
}


// import { useHistory } from "react-router-dom";

// export default function Cources() {
//   let history = useHistory();

//   function handleClick() {
//     history.push("/home");
//   }

//   return (
//     <button type="button" onClick={handleClick}>
//       Go home
//     </button>
//   );
// }