import React from "react";
import { Switch, Route } from "react-router-dom";
import News from './components/News/News'
import Blog from './components/Blog/Blog';
import Cart from './components/Shop/Cart/Cart';
import Product from './components/Shop/Product/Product';
import Storefront from './components/Shop/Storefront/Storefront';
import Navbar from './components/Navbar/Navbar'


export default (
  <Switch>
      <Route exact path="/" component={News} />
      <Route path="/blog" component={Blog} />
      <Route path="/storefront" component={Storefront} />
      <Route path="/product" component={Product} />
      <Route path="/cart" component={Cart} />
  </Switch>
)