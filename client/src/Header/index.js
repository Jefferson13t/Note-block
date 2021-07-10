import React from 'react';
import './style.css'

function Header() {
    return(
        <header className="header">
            <div className="header__logo">
                <p>LOGO</p>
            </div>

            <div className="header__menu">
                <nav>
                    <ul className="header__menu--list">
                        <li className="header__menu--item">Home</li>
                        <li className="header__menu--item">Posts</li>
                        <li className="header__menu--item">Contato</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;