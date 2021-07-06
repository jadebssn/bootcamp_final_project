import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function Login({ loginCallback }) {
    let history = useHistory();


    const [{email, password}, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        // let request_data = {email, password};
        // const response = await fetch('/login', {
        //     method: 'POST',
        //     body: JSON.stringify(request_data),
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-type': 'application/json',
        //         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        //     }
        // });
        // const response_data = await response.json();

        //ask ABOUT TAKEN

        const response = await fetch('/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify({
                email,
                password,
            })
        });

        const data = await response.json();
        const { message, user, token } = data;

        if (data.message === 'success') {
            loginCallback(user);
        }

        localStorage.setItem('my_token', token);
        localStorage.setItem('user_data', JSON.stringify(data));
        history.push('/courses');
    }

    const handleChange = (event) => {
        const allowed_names = ['email', 'password'],
              name  = event.target.name,
              value = event.target.value

        if (-1 !== allowed_names.indexOf(name)) {
            setValues(prev_values => {
                return ({...prev_values,
                    [name]: value
                });
            });
        }
    }
   

    return (
       <div className="login-page">
      <div className="form">
        <br />
        <br />
        
          <svg
            id="Capa_1"
            enable-background="new 0 0 512 512"
            height="100"
            viewBox="0 0 512 512"
            width="100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="m511.045 400.733-29.045-77.453v-247.28c0-24.813-20.187-45-45-45h-362c-24.813 0-45 20.187-45 45v247.28l-29.045 77.453c-.632 1.684-.955 3.468-.955 5.267v30c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-30c0-1.799-.323-3.583-.955-5.267zm-451.045-324.733c0-8.271 6.729-15 15-15h362c8.271 0 15 6.729 15 15v235h-392zm-4.605 265h401.211l18.75 50h-438.711zm426.605 95c0 8.271-6.729 15-15 15h-422c-8.271 0-15-6.729-15-15v-15h452z"
              />
              <path
                d="m342.713 126.63c-5.175-6.469-14.615-7.518-21.083-2.343-6.469 5.175-7.518 14.614-2.343 21.083l32.504 40.63-32.504 40.63c-5.175 6.469-4.126 15.908 2.343 21.083s15.908 4.126 21.083-2.343l40-50c4.383-5.478 4.383-13.262 0-18.74z"
              />
              <path
                d="m190.37 124.287c-6.469-5.175-15.908-4.126-21.083 2.343l-40 50c-4.383 5.478-4.383 13.262 0 18.74l40 50c5.175 6.469 14.615 7.518 21.083 2.343 6.469-5.175 7.518-14.614 2.343-21.083l-32.504-40.63 32.504-40.63c5.175-6.469 4.126-15.908-2.343-21.083z"
              />
              <path
                d="m279.435 86.399c-8.064-1.897-16.14 3.102-18.037 11.166l-40 169.999c-1.897 8.064 3.102 16.14 11.166 18.037s16.14-3.102 18.037-11.166l40-169.999c1.898-8.064-3.101-16.14-11.166-18.037z"
              />
            </g>
          </svg>
          <br />
          <h2>Grow with us</h2>
          <p>Find the best-suited courses for your career development</p>
          <form action="/login" method="post" onSubmit={ handleSubmit }>

            <input type="email" name="email" value={ email } onChange={ handleChange } />

            <input type="password" name="password" value={ password } onChange={ handleChange } />

            <button>Login</button>

        </form>
          <p>Not registered yet? <a href="sign_up.html">Sign up</a></p>
        
      </div>
    </div>
    );
}