import React, { Component } from 'react';
import Header from './HeaderComponents/Header';

import Recipes from './RecipesComponents/Recipes';

//Import CSS
import './Main.css';

class Main extends Component {
  render() {
    return (
        <div className="container">
            <Header />
            
            <Recipes className="recipes"/>
        </div>
    );
  }
}

export default Main;