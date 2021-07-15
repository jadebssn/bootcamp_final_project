import Logout from "../Auth/Logout/Logout";
import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <div className="nav">
            <Link to="/courses" className="userName">Back to courses</Link>
            <Link to="/user-info" className="userName">{props.user.name} profile</Link>
            <Logout logoutCallback={props.logoutCallback}/>
            
        </div>
    )
}