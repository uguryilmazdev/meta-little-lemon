import littleLemonLogo from '../assets/Logo.svg'

function Nav() {
    return (
        <>
            <img src={littleLemonLogo} alt='Little Lemon Logo'/>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>Reservations</a></li>
                <li><a href='#'>Order Online</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
        </>
    )
}

export default Nav;