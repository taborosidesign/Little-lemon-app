import '../styles/Menu.css';
import Card from './Card';

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <div className="menu-header">
        <div className="menu-title">Menu this week!</div>
      </div>
      <Card/>
    </section>
  );
};

export default Menu;