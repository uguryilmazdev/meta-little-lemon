import { useState, useEffect } from 'react'
import '../styles/Main.css'
import { Link } from 'react-router-dom'
import { fetchMenu } from '../menuData'

export default function Main() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchMenu();
                const firstThreeItems = result.slice(0, 3);
                setMenu(firstThreeItems);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])

    return (
        <main>
            <section id='specials-header'>
                <h2>Specials</h2>
                <Link to="menu" className="link-in-button-green">Online Menu</Link>
            </section>
            <section id='specials-container'>
                {menu.map((item) => {
                    return (
                        <article className='card-container' key={item.id}>
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
            </section>
        </main>
    )
}