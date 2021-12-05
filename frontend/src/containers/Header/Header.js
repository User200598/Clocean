import './Header.css';
import React, { Component } from 'react';


// Components
import Search from '../../components/Search/Search';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <small>logo</small>
                <Search/>
                <small>login/signup</small>
            </div>
        )
    }
}

export default Header;
