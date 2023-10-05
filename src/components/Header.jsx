import restaurantPhoto from '../assets/restaurant.jpg'
import '../styles/Header.css'

export default function Header() {
    return (
        <header>
            <div id='header-content'>
                <h1 className="text-headline">Little Lemon</h1>
                <h3 className='text-headline'>London</h3>
                <p className='text-regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='button-yellow'>Reserve a Table</button>
            </div>
            <img src={restaurantPhoto} id='header-image'/>
        </header>
    )
}