import { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Register from '../Register/Register';
import Courses from '../../Courses/Courses';
import Welcome from '../../Welcome/Welcome';
import CourseDetail from "../../CourseDetail/CourseDetail";
import Question from "../../Question/Question";
import Test from '../../Test/Test';
import Nav from '../../Nav/Nav';
import UserInfo from '../../UserInfo/UserInfo';
import Footer from '../../Footer/Footer';




export default function App() {

    const [user, setUser] = useState(null);
//ask about taken
    const loadUsersData = async () => {

        const token = localStorage.getItem('my_token');
        const response = await fetch('/api/user', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();

        console.log(data);
        if (data && data.message === 'success') {
            console.log('in');
            setUser(data.user);
        } else {
            setUser(null);
        }

    }

    useEffect(() => {

        // load the current users data
        // to find out if he's logged in or not
        loadUsersData();


    }, []);
    console.log('user', user);

            
    return (

        user ? (
            <>
             <Nav
                user={user}
              logoutCallback={() => {
                        setUser(null);
                    }}/>
            <Switch>
               
                <Route exact path="/">
                    <Welcome />
                </Route>
                <Route exact path="/courses">
                    <Courses  logoutCallback={() => {
                        setUser(null);
                    }}/>
                </Route>

                <Route exact path="/user-info">
                    <UserInfo />
                </Route>

                <Route exact path="/logout">
                    <Logout logoutCallback={() => {
                        setUser(null);
                    }}/>
                </Route>

                 <Route exact path="/course/:id">
                    <CourseDetail logoutCallback={() => {
                        setUser(null);
                    }}/>
                </Route>
                
                <Route exact path="/course/:course_id/test">
                    <Test logoutCallback={() => {
                        setUser(null);
                    }}/>
                    </Route>

                <Route path="*">
                    <Redirect to="/courses"/>
                </Route>

               
                
            </Switch>
            <Footer/>
            </>
        ) : (
            
            <Switch>
                <Route exact path="/">
                        <Welcome />
                </Route>
                    
                <Route exact path="/sign-in">
                    <Login loginCallback={ (user) => {
                        setUser(user);
                    }}/>
                </Route>
                    
                <Route exact path="/sign-up">
                    <Register />
                </Route>
                
                <Route path="*">
                    <Redirect to="/sign-in"/>
                </Route>
             
                    
            </Switch>

        )
            

    )
}