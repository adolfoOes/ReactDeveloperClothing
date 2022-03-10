import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to="/shop" className='options'>SHOP </Link>
            <Link to="/shop" className='options'>CONTACT</Link>
            {

                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>

            }
        </div>
    </div>
)

export default Header;