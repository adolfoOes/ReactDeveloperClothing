import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
    <div className='header'>
        <Link to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to="/shop" className='options'>SHOP </Link>
            <Link to="/shop" className='options'>CONTACT</Link>
        </div>
    </div>
)

export default Header;