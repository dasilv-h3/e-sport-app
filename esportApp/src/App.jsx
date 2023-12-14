import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Formulaire from "./Components/Login/Login"
import Register from "./Components/Register/Register"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Formulaire />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;