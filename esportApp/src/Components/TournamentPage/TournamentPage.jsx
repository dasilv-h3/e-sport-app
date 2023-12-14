import { Link } from 'react-router-dom';
import './TournamentPage.css'
import Nav from '../Nav/Nav';

const TournamentPage = () => {
    return (
        <>
            <Nav />
            <div className="jeux">
                <div className='jeux-items'>
                    <h1>League of Legends</h1>
                    <Link to ="/Tournament/Lol" ><img className="icon" src="../../../public/img/lol.png" alt="League of Legends" /></Link>
                    <p>Description courte</p>
                </div>
                <div className='jeux-items'>
                    <h1>Rocket League</h1>
                    <Link to ="/Tournament/Rl" ><img className="icon" src="../../../public/img/rl.png" alt="Rocket League" /></Link>
                    <p>Description courte</p>
                </div>
                <div className='jeux-items'>
                    <h1>Counter-Strike 2</h1>
                    <Link to ="/Tournament/Cs" ><img className="icon" src="../../../public/img/cs.png" alt="CS2" /></Link>
                    <p>Description courte</p>
                </div>
            </div>
        </>
    )
}

export default TournamentPage;