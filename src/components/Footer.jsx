import '../styles/Footer.css';
import { socials } from '../data';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <nav className="footer-container">

        <div className="grid-item-contact">
          <p className="footer-title">Contact</p>
          <address>
            Little Lemon<br />
            331 E Chicago<br />
            LaSalle Street Chicago, Illinois 60602<br />
            USA
          </address>
        </div>

        <div className="grid-item-socials">
          <p className="footer-title">Follow us</p>

          <div className="social-icons">
            {socials.map(({ id, Icon, link }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

      </nav>
    </footer>
  );
};

export default Footer;
