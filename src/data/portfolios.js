import img1 from '../img/portImages/rest-api.jpg';
import img2 from '../img/portImages/spotify.png';
import img3 from '../img/portImages/art-graphic.png';
import img4 from '../img/portImages/php.jpg';


const portfolios = [
    {
        id: 1,
        category: 'Python',
        image: img1,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'Api Web',
        text: "Création d'une api REST en utilisant le framework Django. Celle-ci contient de nombreuses fonctionnalités telles que l'authentification, le système de CRUD, etc. Ces fonctionnalités serviront à des futurs projets."
    },
    {
        id: 2,
        category: 'Python | React JS',
        image: img2,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: "Contrôleur de musique",
        text: "Création d'une application qui permet de contrôler la musique en utilisant l'api spotify avec django rest framework comme Api back-end et React JS en front-end. Le principe de l'application est très simple, un utilisateur crée un espace commun et se connecte depuis l'application vers son compte Spotify. Et, par la suite, il pourra inviter d'autres utilisateurs à son espace qui auront la possibilité de modifier la musique en cours de lectures."
    },
    {
        id: 3,
        category: 'React JS',
        image: img3,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'League Of Spartans',
        text: "Développement avec une équipe en méthode agile Scrum d'un jeu web de type League of Legends en utilisant React JS sur le côté client et un Api REST comme back-end offrant les données du jeu."
    },
    {
        id: 4,
        category: 'PHP',
        image: img4,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'Application web',
        text: "Création d'une application web avec un intérêt éducatif. L'application offre un ensemble de cours informatiques sur différentes technologies. Celle-ci a été développée via l'utilisation de Html, Css et JS en front-end avec PHP et mySql en back-end."
    }
]

export default portfolios;