import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Carga el contenedor base
    children: [
      {
        path: "/",
        element: <Home />, // Inyecta la página Home dentro del Outlet de App
      },
    ],
  },
]);