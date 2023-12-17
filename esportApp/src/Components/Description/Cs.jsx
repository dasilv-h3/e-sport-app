import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";

const Cs = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:3000/users');
                const users = await response.json();

                const loggedUser = users.find(user => user.isLogged);

                if (loggedUser) {
                    setUser(loggedUser);
                } else {
                    console.warn('Aucun utilisateur connecté');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des utilisateurs', error);
            }
        };

        fetchUser();
    }, []);

    const handleSignUp = async () => {
        try {
            if (user) {
                const response = await fetch(`http://localhost:3000/users/${user.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        tcs: !user.tcs
                    })
                });
    
                if (response.ok) {
                    console.log('Mise à jour réussie pour tcs');

                    setUser(prevUser => ({
                        ...prevUser,
                        tcs: !prevUser.tcs
                    }));
                } else {
                    console.error('Erreur lors de la mise à jour pour tcs');
                }
            } else {
                console.warn('Aucun utilisateur connecté');
            }
        } catch (error) {
            console.error('Erreur', error);
        }
    };

    return (
        <>
            <Nav />
            <div className="desc">
                <h1>Description</h1>
                <p>Counter-Strike: Global Offensive (CS: GO) est un jeu de tir à la première personne compétitif. Les joueurs s'affrontent en équipes, l'une incarnant des terroristes et l'autre des contre-terroristes. L'objectif varie selon le mode de jeu, allant de la pose ou désamorçage de bombes à la libération ou la défense d'otages. CS: GO est connu pour son gameplay tactique, ses armes variées, et son exigence de précision. Les parties sont rapides, intenses et requièrent une coordination d'équipe stratégique pour atteindre la victoire.</p>
                <button type="button" onClick={handleSignUp}>S'inscrire</button>
            </div>
        </>
    );
}

export default Cs;