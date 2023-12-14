import { useState } from "react";
import Nav from "../Nav/Nav";

const Lol = () => {

    const [tlol, setTlol] = useState('');
    const handleSubmit = async (e) => {
        e.prevendDefault();

        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify({
                    tlol
                })
            })
        }
        catch (error) {
            console.error('Erreur', error)
        }
    }
    return (
        <>
            <Nav />
            <div className="desc">
                <h1>Description</h1>
                <p>League of Legends (LoL) est un jeu en ligne stratégique où deux équipes de cinq joueurs s'affrontent pour détruire la base ennemie, le Nexus. Chacun contrôle un champion aux compétences uniques, gagnant de l'or et de l'expérience pour renforcer son personnage. La carte est divisée en trois voies connectées par une jungle, et la coopération d'équipe est essentielle pour détruire les tours ennemies et remporter la victoire. Avec une grande diversité de champions et une profondeur tactique, LoL est un jeu compétitif apprécié dans le monde entier.</p>
                <form onSubmit={handleSubmit}>
                    <button type="button" onChange={(e) => setTlol(e.target.value)}>S'inscrire</button>
                </form>
            </div>
        </>
    )
}

export default Lol;