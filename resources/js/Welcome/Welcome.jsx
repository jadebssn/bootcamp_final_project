import {Link } from "react-router-dom";

export default function Welcome() {

    return (
        <div>
            <Link to="/sign-in">Sign in</Link>
            <br/>
            <Link to="/sign-up">Sign up</Link>
        </div>
    )
}