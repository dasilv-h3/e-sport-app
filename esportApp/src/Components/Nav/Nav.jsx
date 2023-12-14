import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <>
            <nav>
                <Link to = "/Tournament"><img className='home' src="../../../public/img/home.png" alt="home icon" /></Link>
                <img className='deconnexion' src="../../../public/img/deco.png" alt="deconnexion" />
            </nav>
        </>
    )
}

export default Nav;