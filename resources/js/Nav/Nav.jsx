import Logout from "../Auth/Logout/Logout";
import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <div className="nav">
            <Link to="/courses" className="userName">Courses</Link>
            <div className="nav__buttons">
                <Link to="/user-info" className="user__profile">{props.user.name}</Link>
                <Logout className="userName" logoutCallback={props.logoutCallback}/>
            </div>
            
        </div>
        
    )
}