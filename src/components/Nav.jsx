import littleLemonLogo from '../assets/Logo.svg'
import { Link } from "react-router-dom";
import '../styles/Nav.css'

function Nav() {
    return (
        <nav>
            <img src={littleLemonLogo} alt='Little Lemon Logo' className='logo'/>
            <ul>
                <Link to="/" className='link'>Home</Link>
                <Link to="about" className='link'>About</Link>
                <Link to="menu" className='link'>Menu</Link>
                <Link to="reservation" className='link'>Reservation</Link>
                <Link to="/order" className='link'>Order Online</Link>
                <Link to="/login" className='link'>Login</Link>
            </ul>
        </nav>
    )
}

export default Nav;