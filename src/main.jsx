import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './App.jsx'
import About from './pages/About.jsx'
import Menu from './pages/Menu.jsx'
import Reservation from './pages/Reservation.jsx'
import Order from './pages/Order.jsx'
import Login from './pages/Login.jsx';
import ValidLogin from './pages/ValidLogin.jsx';
import ValidReservation from './pages/ValidReservation.jsx'
import { AuthProvider } from './contexts/AuthContext'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/menu",
    element: <Menu />
  },
  {
    path: "/reservation",
    element: <Reservation />
  },
  {
    path: "/order",
    element: <Order />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/valid",
    element: <ValidLogin />,
  },
  {
    path: "/reservatipn/valid",
    element: <ValidReservation />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
