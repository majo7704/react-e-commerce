import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();
//context object comes with two components:
//Provider (provides all information for our app)
//Consumer (whenever we want to use information that the provider provides we use consumer)no need to pass props to child components


class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct:detailProduct
  }
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    })
    this.setState(() => {
      return { products: tempProducts }
    });
  };
  handleDetail = () => {
    console.log('hello from detail')
  }
  addToCart = () => {
    console.log('hello from addToCart')
  }
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };