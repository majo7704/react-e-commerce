import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { storeProducts } from '../data'
import {ProductConsuer} from '../context'
export default class ProductList extends Component {
    state = {
      products: storeProducts
    };
  render() {
    console.log(this.state.products)
    return (
      <>
        <div className="py-5">
          <div className='container'>
            <Title name="our" title="products" />
            <div className='row'>
              <ProductConsuer>
                {value => {
                  return <h1>{value}</h1>
                }}
              </ProductConsuer>
            </div>
          </div>
        </div>
        {/* <Product/> */}
      </>
    )
  }
}
