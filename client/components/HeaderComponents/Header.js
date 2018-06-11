import React, { Component } from 'react';

//Import CSS
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="header">          
          <p className="header__Title">Mijn recepten</p>          
        </header>
    );
  }
}

export default Header;