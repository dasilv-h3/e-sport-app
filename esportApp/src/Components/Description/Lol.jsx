import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";

const Lol = () => {
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
                        tlol: !user.tlol
                    })
                });
    
                if (response.ok) {
                    console.log('Mise à jour réussie pour tlol');

                    setUser(prevUser => ({
                        ...prevUser,
                        tlol: !prevUser.tlol
                    }));
                } else {
                    console.error('Erreur lors de la mise à jour pour tlol');
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
                <p>League of Legends (LoL) est un jeu en ligne stratégique où deux équipes de cinq joueurs s'affrontent pour détruire la base ennemie, le Nexus. Chacun contrôle un champion aux compétences uniques, gagnant de l'or et de l'expérience pour renforcer son personnage. La carte est divisée en trois voies connectées par une jungle, et la coopération d'équipe est essentielle pour détruire les tours ennemies et remporter la victoire. Avec une grande diversité de champions et une profondeur tactique, LoL est un jeu compétitif apprécié dans le monde entier.</p>
                <button type="button" onClick={handleSignUp}>S'inscrire</button>
            </div>
        </>
    );
}

export default Lol;