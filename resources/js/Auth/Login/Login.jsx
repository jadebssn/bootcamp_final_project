import React, { useState, useEffect } from 'react';

export default function Login({ loginCallback }) {

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
        <form action="/login" method="post" onSubmit={ handleSubmit }>

            <input type="email" name="email" value={ email } onChange={ handleChange } />

            <input type="password" name="password" value={ password } onChange={ handleChange } />

            <button>Login</button>

        </form>
    );
}