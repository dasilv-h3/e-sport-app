import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import TournamentPage from "./Components/TournamentPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/tournament",
    element: <TournamentPage />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;