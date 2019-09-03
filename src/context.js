import React, { Component } from 'react'


const ProductContext = React.createContext();
//context object comes with two components:
//Provider (provides all information for our app)
//Consumer (whenever we want to use information that the provider provides we use consumer)no need to pass props to child components


class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="hello from context">
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}