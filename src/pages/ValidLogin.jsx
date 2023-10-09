import Nav from "../components/Nav";
import Footer from "../components/Footer";
import '../styles/ValidLogin.css'
import { Link } from "react-router-dom";

export default function ValidLogin() {
    return (
        <>
            <Nav />
            <main>
                <h1>YOUR ACCOUNT HAS BEEN CREATED!</h1>
                <h2>Discover the tasty foods in Little Lemon</h2>
                <Link to="/menu" className='link-in-button-green'>Menu</Link>
            </main>
            <Footer />
        </>
    )
}