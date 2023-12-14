import React, {useState} from "react";
import { Link } from "react-router-dom";
// import userData from '../../API/db.json';
import { useNavigate } from "react-router-dom";
import { checkUser } from "../../services/api";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate();

    const handleLogging = (e) => {
        e.preventDefault();

        // FormData permet de récupérer la saisie d'un formulaire
        const type = Object.fromEntries(new FormData(e.target));

        // console.log(type);

        checkUser(type).then( data => console.log(data) );

        // const user = users.find(
        //     (user) => users.username === username && users.password === password
        // )
        
        if(type) {
            setIsLoggedIn(true);
            console.log("Connecter avec succes");
            navigate("/tournament")
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
            <form onSubmit={handleLogging} className="box">
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div>
                    <button type="submit" className="login-btn" >Login</button>


                    {isLoggedIn && <p>Connecté avec succés!</p>}
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
        </section>
        
    </main>
);
};

export default Login;
