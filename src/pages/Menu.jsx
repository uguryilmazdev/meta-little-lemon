import { useState, useEffect } from "react";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { fetchMenu } from "../menuData"
import '../styles/menu.css'

export default function Menu() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchMenu();
                setMenu(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <Nav />
            <main id="page-menu-container">
                {menu.map((item) => {
                    return (
                        <article key={item.id} className='menu-item-container'>
                            <img src={item.image} alt="Image of Greek Salad" className='card-image'/>
                            <div className='card-info'>
                                <div className='card-header'>
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                </div>
                                <p className='card-text'>{item.description}</p>
                            </div>
                        </article>
                    )
                })}
            </main>
            <Footer />
        </>
    )
}