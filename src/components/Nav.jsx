import littleLemonLogo from '../assets/Logo.svg'
import '../styles/Nav.css'

function Nav() {
    return (
        <nav>
            <img src={littleLemonLogo} alt='Little Lemon Logo' className='logo'/>
            <ul>
                <li><a href='#' className='link'>Home</a></li>
                <li><a href='#' className='link'>About</a></li>
                <li><a href='#' className='link'>Menu</a></li>
                <li><a href='#' className='link'>Reservations</a></li>
                <li><a href='#' className='link'>Order Online</a></li>
                <li><a href='#' className='link'>Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;