import '../styles/Card.css';
import { menus } from '../data';
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Card = () => {
  const menu = menus.map(
    ({ id, image, name, price, description }) => {
      return (
        <div key={id} className='card-container'>
          <div className='menu-image-container'>
            <img src={image} alt={name} className='menu-image' />
          </div>
          <div className='menu-details'>
            <div className='menu-name'>
              <p>{name}</p>
              <p className='menu-price'>{price}</p>
            </div>
            <p className='menu-description'>{description}</p>
            <div className='menu-delivery'>
              <p className='menu-name'>Order</p>
              <Link to="/reservation"><RiShoppingCart2Fill className='order-button'/></Link>
            </div>
          </div>
        </div>
      );
    }
  );
  return <div className='card-list'>{menu}</div>;
};

export default Card;