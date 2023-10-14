import Nav from "../components/Nav"
import Footer from "../components/Footer"
import chefPhoto1 from '../assets/chef1.jpg'
import chefPhoto2 from '../assets/chef2.jpg'
import '../styles/About.css'

export default function About() {
    return (
        <>
            <Nav />
            <main id="page-about-container">
                <h1>Hey there! We are George and Bob</h1>
                <div>
                    <img
                    src={chefPhoto1}
                    alt="The owners of restaurant are in the kitchen"
                    className="about-image"
                    />
                    <img
                    src={chefPhoto2}
                    alt="The owners of restaurant are in the kitchen"
                    className="about-image"
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}