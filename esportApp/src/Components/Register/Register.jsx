import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css"

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
    e.preventDefault();

    // Check if the username already exists
    const isUsernameExists = await checkUsernameExists(username);

    if (isUsernameExists) {
        console.error('Username already exists');
        // Handle the case where the username already exists (e.g., show an error message)
        return;
    }

    // Simulate a POST request to update the db.json file
    try {
        const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
            tlol: 'False',
            trl: 'False',
            tcs: 'False',
            isLogged: false
        }),
        });

        if (response.ok) {
        console.log('Registration successful');
        // Redirect to login page
        navigate('/');
        } else {
        console.error('Registration failed');
        }
    } catch (error) {
        console.error('Error during registration', error);
    }
    };

    // Function to check if the username already exists
    const checkUsernameExists = async (username) => {
    try {
        const response = await fetch(`http://localhost:3000/users?username=${username}`);
        const users = await response.json();
        return users.length > 0;
    } catch (error) {
        console.error('Error checking username existence', error);
        return false;
    }
    };

    return (
    <section className="register-container">
        <div className="inner-container">
        <h3 className="register-title">Register</h3>
        <form className="form-container" onSubmit={handleRegister}>
            <div className="input-item">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className="input-item">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div>
            <Link to="/">Back to login</Link>
            <button type="submit" className="login-btn">
                Register
            </button>
            </div>
        </form>
        </div>
    </section>
    );
};

export default Register;