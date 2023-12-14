import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
    return(
        <section className="register-container">
        <div className="inner-container">
                <h3 className="register-title">Register</h3>
                <form className="form-container" method="POST">
                    <div className="input-item">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="Username"/>
                    </div>
                    <div className="input-item">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"/>
                    </div>
                    <div>
                        <Link to="/">Back to login</Link>
                        <button type="submit" className="login-btn" >Register</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Register;