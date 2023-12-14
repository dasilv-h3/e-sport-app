import { useState } from "react";
import Nav from "../Nav/Nav";

const Cs = () => {
    const [tcs, setTcs] = useState('');
    const handleSubmit = async (e) => {
        e.prevendDefault();

        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify({
                    tcs
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
                <p>Counter-Strike: Global Offensive (CS: GO) est un jeu de tir à la première personne compétitif. Les joueurs s'affrontent en équipes, l'une incarnant des terroristes et l'autre des contre-terroristes. L'objectif varie selon le mode de jeu, allant de la pose ou désamorçage de bombes à la libération ou la défense d'otages. CS: GO est connu pour son gameplay tactique, ses armes variées, et son exigence de précision. Les parties sont rapides, intenses et requièrent une coordination d'équipe stratégique pour atteindre la victoire.</p>
                <button type="button" onChange={(e) => setTcs(e.target.value)}>S'inscrire</button>
                
            </div>
        </>
    )
}

export default Cs;