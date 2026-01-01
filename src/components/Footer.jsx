import './Footer.css';
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logoImg} alt="CretoWorks" />
          </div>
          <p className="footer-desc">
            비즈니스 맞춤형 인공지능 솔루션 파트너<br />
            AI for Everyone.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Service</h4>
            <ul>
              <li><a href="#services">AI Store</a></li>
              <li><a href="#custom-ai">Custom AI</a></li>
              <li><a href="#tech-consult">Technology Consulting</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#team">Team</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} CretoWorks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
