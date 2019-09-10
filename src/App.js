import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navabar'
import ProductList from './components/ProductList'
import Product from './components/Product'
import Details from './components/Details'
import Cart from './components/Cart'
import PageNotFound from './components/PageNotFound'
import Modal from './components/Modal'

export default class App extends Component {
  render() {
    return (
      <> 
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList}></Route>
          <Route path='/details' component={Details}></Route>
          <Route path='/cart' component={Cart}></Route>
          {/* if the router doesn't find the page that we're looking for it will display PageNotFound compponent */}
          <Route component={PageNotFound}></Route> 
        </Switch>
      <Modal/>
      </>
    )
  }
}



