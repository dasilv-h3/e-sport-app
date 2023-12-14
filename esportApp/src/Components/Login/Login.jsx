import React, {UsneState, useState} from "react";
import { Link } from "react-router-dom";
import userData from '../../API/db.json';

const Formulaire = () => {

    const [Username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const user = null;
    const handleLogging = () => {
        const user = userData.find(
            (user) => user.Username === username && user.password === password
        )
        
        if(user) {
            setIsLoggedIn(true);
            console.log("Connecter avec succes");
        } else {
            console.log("t'es pas connecter");
        }
    };

    return (
    <main>
        <section className="register-container"><div className="root-container">
            <div className="box-container">
                <div className="controller">
                Login
                </div>
            </div>
        </div>

        <div className="inner-container">
            <form method="POST" className="box">
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Username" value={Username} onChange={(e) => setUsername(e.target.value)} required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div>
                    <button type="submit" className="login-btn" onClick={handleLogging}>Login</button>
                    {isLoggedIn && <p>Connecté avec succés!</p>}
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
        </section>
        
    </main>
);
};

export default Formulaire;
