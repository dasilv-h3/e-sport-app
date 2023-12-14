import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Formulaire from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import TournamentPage from './Components/TournamentPage/TournamentPage';
import Nav from './Components/Nav/Nav';
import Lol from './Components/Description/Lol';
import Rl from './Components/Description/Rl';
import Cs from './Components/Description/Cs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Formulaire />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/Tournament",
    element: <TournamentPage />
  },
  {
    path: "/Tournament/Lol",
    element: <Lol />  
  },
  {
    path: "/Tournament/Rl",
    element: <Rl />
  },
  {
    path: "/Tournament/Cs",
    element: <Cs />
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;