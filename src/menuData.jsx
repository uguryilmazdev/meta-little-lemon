import greekSaladImage from './assets/greek_salad.jpg'
import bruchettaImage from './assets/bruchetta.svg'
import lemonDessertImage from './assets/lemon_dessert.jpg'
import cheesecakeImage from './assets/cheesecake.jpg'
import margheritaImage from './assets/margherita.jpg'

const menuItems = [
    {
        id: "1",
        name: "Greek Salad",
        description:  "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "12.99",
        image: greekSaladImage,
    },
    {
        id: "2",
        name: "Bruchetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: "5.99",
        image: bruchettaImage,
    },
    {
        id: "3",
        name: "Lemon Dessert",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: "5.00",
        image: lemonDessertImage,
    },
    {
        id: "4",
        name: "Cheesecake",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis tellus vel massa sodales, sed rutrum elit accumsan.",
        price: "10.00",
        image: cheesecakeImage,
    },
    {
        id: "5",
        name: "Pizza Margherita",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis tellus vel massa sodales, sed rutrum elit accumsan.",
        price: "15.00",
        image: margheritaImage,
    }
];

export const fetchMenu = () => {
    return new Promise((resolve, reject) => {
            resolve(menuItems);
    })
  }