import Logout from "../Auth/Logout/Logout";
import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <div className="nav">
            <Link to="/courses" className="userName">Back to courses</Link>
            <div className="nav__buttons">
                <Link to="/user-info" className="user__profile">{props.user.name} profile</Link>
                <Logout className="userName" logoutCallback={props.logoutCallback}/>
            </div>
            
        </div>
        
    )
}