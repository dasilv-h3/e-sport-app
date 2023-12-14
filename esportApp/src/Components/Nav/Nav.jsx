import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <>
            <nav>
                <Link to = "/tournament"><img className='home' src="/img/home.png" alt="home icon" /></Link>
                <Link to = "/"><img className='deconnexion' src="/img/deco.png" alt="deconnexion" /></Link>
            </nav>
        </>
    )
}

export default Nav;