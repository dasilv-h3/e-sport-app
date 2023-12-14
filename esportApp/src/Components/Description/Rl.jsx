import { useState } from "react";
import Nav from "../Nav/Nav";

const Rl = () => {
    const [trl, settrl] = useState('');
    const handleSubmit = async (e) => {
        e.prevendDefault();

        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify({
                    trl
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
                <p>Rocket League est un jeu de football hors du commun où des voitures propulsées s'affrontent pour marquer des buts. Avec des capacités acrobatiques, des boosters, et des parties rapides, c'est une expérience de jeu unique en son genre, mêlant compétition sportive et action débridée.</p>
                <button type="button" onChange={(e) => settrl(e.target.value)}>S'inscrire</button>
            </div>
        </>
    )
}

export default Rl;