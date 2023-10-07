import '../styles/Main.css'
import greekSaladImage from '../assets/greek_salad.jpg'
import bruchettaImage from '../assets/bruchetta.svg'
import lemonDessertImage from '../assets/lemon_dessert.jpg'
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <main>
            <section id='specials-header'>
                <h2>Specials</h2>
                <Link to="menu" className="link-in-button-green">Online Menu</Link>
            </section>
            <section id='specials-container'>
                <article className='card-container'>
                    <img src={greekSaladImage} alt="Image of Greek Salad" className='card-image'/>
                    <div className='card-info'>
                        <div className='card-header'>
                            <h3>Greek Salad</h3>
                            <p>$12.99</p>
                        </div>
                        <p className='card-text'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago
                            style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <a href="#" className='link'>Order a delivery</a>
                    </div>
                </article>
                <article className='card-container'>
                    <img src={bruchettaImage} alt="Image of Bruchetta" className='card-image'/>
                    <div className='card-info'>
                        <div className='card-header'>
                            <h3>Bruchetta</h3>
                            <p>$5.99</p>
                        </div>
                        <p className='card-text'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned
                             with salt and olive oil.  </p>
                        <a href="#" className='link'>Order a delivery</a>
                    </div>
                </article>
                <article className='card-container'>
                    <img src={lemonDessertImage} alt="Image of Lemon Dessert" className='card-image'/>
                    <div className='card-info'>
                        <div className='card-header'>
                            <h3>Lemon Dessert</h3>
                            <p>$5.00</p>
                        </div>
                        <p className='card-text'>This comes straight from grandma’s recipe book, every last
                            ingredient has been sourced and is as authentic as can be imagined. </p>
                        <a href="#" className='link'>Order a delivery</a>
                    </div>
                </article>
            </section>
        </main>
    )
}