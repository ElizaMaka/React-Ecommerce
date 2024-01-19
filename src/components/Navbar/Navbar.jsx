import React, { useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import logo from '/logo-gaia.webp'
import { Link, useLocation } from 'react-router-dom'
import { JsonContext } from '../../context/JsonServerContext'
import OrderNow from './OrderNow'

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [menuToggle, setMenuToggle] = useState(false);
    const [mobileBar, setMobileBar] = useState(false);
    const [show, setShow] = useState(false);

    const { cartItemCount } = useContext(JsonContext);

    const isActive = (path) => {
        return currentPath === path;
    };
    return (
        <nav>
            <Link to="/">
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                </div>
            </Link>
            <div>
                <ul className={`nav-menu ${menuToggle ? "active" : ""}`}>
                    <li>
                        <Link to="/"  onClick={() => { setMobileBar((prev) => !prev), setMenuToggle((prev) => !prev) }}>Home</Link>
                        {isActive('/') ? <hr /> : ""}
                    </li>
                    <li>
                        <Link to="/menu"  onClick={() => { setMobileBar((prev) => !prev), setMenuToggle((prev) => !prev) }}>Menu</Link>
                        {isActive('/menu') ? <hr /> : ""}
                    </li>
                    <li>
                        <Link to="/location"  onClick={() => { setMobileBar((prev) => !prev), setMenuToggle((prev) => !prev) }}>Location</Link>
                        {isActive('/location') ? <hr /> : ""}
                    </li>
                    <li style={{ cursor: "pointer" }} onClick={() => setShow((prev) => !prev)}>
                        Order Now
                    </li>
                    <li>
                        <Link to="/login"><button className='login-btn'>Login</button></Link>
                    </li>
                    <li>
                        <Link to="/cart"  onClick={() => { setMobileBar((prev) => !prev), setMenuToggle((prev) => !prev) }}><FontAwesomeIcon icon={faShoppingCart} /></Link>
                        <div className="nav-cart-count"> { cartItemCount } </div>
                    </li>
                </ul>
            </div>
            <div className='mobile-navbar' onClick={() => { setMobileBar((prev) => !prev), setMenuToggle((prev) => !prev) }}>
                <i className={mobileBar ? "fas fa-times" : "fas fa-bars"}></i>
                <div className="mobile-nav-cart-count">{cartItemCount}</div>

            </div>

            {/* Order Now slide  */}
            <OrderNow show={show} setShow={setShow} />
        </nav>
    )
}

export default Navbar