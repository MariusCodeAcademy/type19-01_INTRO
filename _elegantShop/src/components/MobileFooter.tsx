import React from 'react';
import './MobileFooter.css';

const MobileFooter: React.FC = () => {
    return (
        <footer className="mobile-footer">
            <div className="logo">Headphone Store</div>
            <div className="links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="social-media">
                <a href="#"><img src="instagram.png" alt="Instagram" /></a>
                <a href="#"><img src="facebook.png" alt="Facebook" /></a>
                <a href="#"><img src="youtube.png" alt="YouTube" /></a>
            </div>
            <div className="legal">
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                </ul>
            </div>
            <div className="copyright">
                Copyright © 2023 3iegant. All rights reserved.
            </div>
        </footer>
    );
}

export default MobileFooter;
