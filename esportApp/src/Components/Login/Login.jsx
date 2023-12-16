import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();

    // Simuler une recherche d'utilisateur dans le fichier db.json
    try {
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();

        const user = users.find(
        (u) => u.username === username && u.password === password
        );

        if (user) {
        console.log('Login successful');
        user.isLogged = true;

        // Effectuer une requête PUT pour mettre à jour le fichier db.json
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
        <div className="inner-container">
        <h3 className="login-title">Login</h3>
        <form className="form-container" onSubmit={handleLogin}>
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
            <Link to="/register">Register</Link>
            <button type="submit" className="login-btn">
                Login
            </button>
            </div>
        </form>
        </div>
    </section>
    );
};

export default Login;
