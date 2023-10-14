import restaurantPhoto from '../assets/restaurant.jpg'
import '../styles/Header.css'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div id='header-content'>
                <h1 className="text-headline">Little Lemon</h1>
                <h3 className='text-headline'>London</h3>
                <p className='text-regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to="/booking" className="link-in-button-yellow">Reserve a Table</Link>
            </div>
            <img src={restaurantPhoto} id='header-image'/>
        </header>
    )
}