import littleLemonLogo from '../assets/Logo.svg'
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import '../styles/Nav.css'

function Nav() {

    const {isLoggedIn, logout} = useAuth();
    const navigate = useNavigate();

    return (
        <nav>
            <img src={littleLemonLogo} alt='Little Lemon Logo' className='logo'/>
            <ul>
                <Link to="/" className='link'>Home</Link>
                <Link to="/about" className='link'>About</Link>
                <Link to="/menu" className='link'>Menu</Link>
                <Link to="/booking" className='link'>Reservation</Link>
                {isLoggedIn ?
                <button className='button-green' onClick={() => {logout(), navigate("/")}}>Logout</button>
                :
                <Link to="/login" className='link'>Login</Link>
                }
            </ul>
        </nav>
    )
}

export default Nav;