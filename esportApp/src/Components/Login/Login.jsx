import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();

        const user = users.find(
        (u) => u.username === username && u.password === password
        );

        if (user) {
        console.log('Login successful');
        user.isLogged = true;

        await fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        });
        navigate('/tournament');
        } else {
        console.error('Login failed');
        }
    } catch (error) {
        console.error('Error during login', error);
    }
    };

    return (
    <section className="login-container">
        <div className="login-wrapper">
        <h3 className="login-title">Login</h3>
        <form className="form-container" onSubmit={handleLogin}>
            <div className="input-item">
            <label htmlFor="username">Username : </label>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className="input-item">
            <label htmlFor="password">Password : </label>
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className="login-btn">
                <Link className="register-link" to="/register">Register</Link>
                <button type="submit" className="login-submit">
                    Login
                </button>
            </div>
        </form>
        </div>
    </section>
    );
};

export default Login;
