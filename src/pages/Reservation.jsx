import { useEffect } from "react";
import Nav from "../components/Nav"
import FormReservation from "../components/FormReservation"
import Footer from "../components/Footer"
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Reservation() {
    // if the user has logged in, show the reservation page
    // otherwise, redirect to the login page
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
          navigate('/login');
        }
      }, [isLoggedIn, navigate]);

    return (
        <>
            <Nav />
            <FormReservation />
            <Footer />
        </>
    )
}