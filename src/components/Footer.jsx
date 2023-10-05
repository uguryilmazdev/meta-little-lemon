import '../styles/Footer.css'
import logo from '../assets/logo.png'

export default function Footer() {
    return (
        <footer>
            <img src={logo} alt="Little Lemon logo" />
            <div>
                <h4>Contact</h4>
                <p>Little Lemon, London, United Kingdom</p>
                <p>thisislittlelemon@gmail.com</p>
                <p>132434562</p>
            </div>
            <div>
                <h4>Social Media</h4>
                <a href="#" className='link footer-link'>Facebook</a>
                <a href="#" className='link footer-link'>Instagram</a>
                <a href="#" className='link footer-link'>Twitter</a>
            </div>
        </footer>
    )
}