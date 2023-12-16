import React from 'react';
import { Link } from 'react-router-dom';
import "../Nav/Nav.css"

const Nav = () => {
    const handleLogout = async () => {
    // Simuler une recherche d'utilisateur dans le fichier db.json
    try {
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();

        // Trouver l'utilisateur connecté (assumer qu'il n'y a qu'un utilisateur pour la démo)
        const loggedInUser = users.find((u) => u.isLogged);

        if (loggedInUser) {
        // Marquer l'utilisateur comme déconnecté (côté client uniquement)
        loggedInUser.isLogged = false;

        // Effectuer une requête PUT pour mettre à jour le fichier db.json
        await fetch(`http://localhost:3000/users/${loggedInUser.id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(loggedInUser),
        });

        // Rediriger l'utilisateur vers la page de connexion ou une autre page
        window.location.href = '/'; // Redirection vers la page de connexion
        } else {
        console.error('Logout failed: No logged-in user found');
        }
    } catch (error) {
        console.error('Error during logout', error);
    }
    };

    return (
    <>
        <nav>
        <Link to="/tournament">
            <img className='home' src="/img/home.png" alt="home icon" />
        </Link>
        <button className='deconnexion' onClick={handleLogout}>
            <img src="/img/deco.png" alt="deconnexion" />
        </button>
        </nav>
    </>
    );
};

export default Nav;
