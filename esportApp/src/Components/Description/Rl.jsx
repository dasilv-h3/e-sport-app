import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";

const Rl = () => {
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
                        trl: !user.trl
                    })
                });
    
                if (response.ok) {
                    console.log('Mise à jour réussie pour trl');

                    setUser(prevUser => ({
                        ...prevUser,
                        trl: !prevUser.trl
                    }));
                } else {
                    console.error('Erreur lors de la mise à jour pour trl');
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
                <p>Rocket League est un jeu de football hors du commun où des voitures propulsées s'affrontent pour marquer des buts. Avec des capacités acrobatiques, des boosters, et des parties rapides, c'est une expérience de jeu unique en son genre, mêlant compétition sportive et action débridée.</p>
                <button type="button" onClick={handleSignUp}>S'inscrire</button>
            </div>
        </>
    );
}

export default Rl;