import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function Register(props) {
    let history = useHistory();

    const [{email, name, password, password_confirmation}, setValues] = useState({
        email: '',
        name: '',
        password: '',
        password_confirmation: ''
    })

    const handleSubmit = async (event) => {

        event.preventDefault();

        let request_data = {email, name, password, password_confirmation};
        const response = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify(request_data),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
        const response_data = await response.json();
        history.push('/courses');

        // do anything you want
    }

    const handleChange = (event) => {
        const allowed_names = ['name', 'email', 'password', 'password_confirmation'],
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
        <form action="/register" method="post" onSubmit={ handleSubmit }>

            <input type="text" name="name" value={ name } onChange={ handleChange } />

            <input type="email" name="email" value={ email } onChange={ handleChange } />

            <input type="password" name="password" value={ password } onChange={ handleChange } />

            <input type="password" name="password_confirmation" value={ password_confirmation } onChange={ handleChange } />

            <button>Register</button>

        </form>
    );
}