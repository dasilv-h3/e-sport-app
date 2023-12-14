import './App.css'
import TournamentPage from './Components/TournamentPage/TournamentPage';
import Nav from './Components/Nav/Nav';
import Lol from './Components/Description/Lol';
import Rl from './Components/Description/Rl';
import Cs from './Components/Description/Cs';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
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
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;