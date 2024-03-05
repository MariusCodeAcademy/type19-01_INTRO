import React from "react";

interface FooterProps {
  logo: 
}

const MobileFooter: React.FC<FooterProps> = ({ logo }) => {
  return (
    <footer className="footer--mobile">
      <div className="footer__container">
        <a href="#" className="footer__logo">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="footer__nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="#" className="footer__social-link">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#" className="footer__social-link">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="footer__social-link">
            <i className="fa fa-youtube"></i>
          </a>
        </div>
        <div className="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
        <p className="footer__copyright">&copy; 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const DesktopFooter: React.FC<FooterProps> = ({ logo }) => {
  return (
    <footer className="footer--desktop">
      <div className="footer__container">
        <div className="footer__row">
          <a href="#" className="footer__logo">
            <img src={logo} alt="Logo" />
          </a>
          <nav className="footer__nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__row">
          <div className="footer__social">
            <a href="#" className="footer__social-link">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" className="footer__social-link">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="footer__social-link">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
        <p className="footer__copyright">&copy; 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export { MobileFooter, DesktopFooter };
