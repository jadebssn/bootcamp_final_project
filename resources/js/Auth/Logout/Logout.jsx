
import { useHistory } from "react-router-dom";
// i added

export default function Logout({ logoutCallback }) {
    // i added
    let history = useHistory();

    const handleClick = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('my_token');

        const response = await fetch('/api/logout', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                'Authorization': `Bearer ${token}`,
            }
        })

        const response_data = await response.json();
       
         

        // do something with the fact that the user is logged out
        logoutCallback();
         // i added
        history.push('/sign-in');
    }

    return (
        <button className="logout" onClick={ handleClick }>Logout</button>
    )

}