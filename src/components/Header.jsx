import restaurantPhoto from '../assets/restaurant.jpg'

export default function Header() {
    return (
        <header>
            <div>
                <h1>Little Lemon</h1>
                <h3>London</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Reserve a Table</button>
            </div>
            <img src={restaurantPhoto}/>
        </header>
    )
}