import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// MENU SPECIALS IMG
import greekSalad from "./assets/menu/greekSalad.jpg";
import bruschetta from "./assets/menu/bruschetta.jpg";
import lemonDessert from "./assets/menu/lemonDessert.jpg";

// LINKS FOR NAVBAR
export const navLinks = [
  { id: "1", title: "Home" },
  { id: "2", title: "About" },
  { id: "3", title: "Menu" },
  { id: "4", title: "Reservations" },
  { id: "5", title: "Contact" },
];

// HERO TEXT
export const heroText = {
  heading: "Little Lemon",
  subheading: "Chicago",
  description:
    "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
};

// MENU SPECIALS
export const specials = [
  {
    id: 1,
    image: greekSalad,
    name: "Greek Salad",
    price: "$ 12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 2,
    image: bruschetta,
    name: "Bruschetta",
    price: "$ 5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.",
  },
  {
    id: 3,
    image: lemonDessert,
    name: "Lemon Dessert",
    price: "$ 5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

// FOOTER SOCIAL LINKS (NINCS JSX A DATA-BAN)
export const socials = [
  { id: 1, Icon: FaFacebook, link: "https://facebook.com" },
  { id: 2, Icon: FaInstagram, link: "https://instagram.com/" },
  { id: 3, Icon: FaTwitter, link: "https://twitter.com/" },
];
