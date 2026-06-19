import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../pages/Home/Home.jsx';
import About from '../pages/About/About.jsx';
import Adoptions from '../pages/Adoptions/Adoptions.jsx';
import Report from '../pages/Report/Report.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // contenedor base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/nosotros",
        element: <Home />,
      },
      {
        path: "/adopta",
        element: <Adoptions />,
      },
      {
        path: "/reportar",
        element: <Report />,
      },
    ],
  },
]);
