import React from 'react';
import {Switch, Route } from "react-router-dom"

import Cart from './Compontents/Cart/Cart';
import CartItem from './Compontents/Cart/CartItem';
import Navbar from './Compontents/Navbar/Navbar';
import Products from './Compontents/Products/Products';

const App = () => {
  return ( 
    <div className=" App">
      <Navbar />
      <Switch>
        <Route path="/product/:id" component={CartItem} />
          <Route path="/cart" component={Cart} />
        <Route path="/" component={Products} />
      </Switch>
    </div>
   );
}
 
export default App;