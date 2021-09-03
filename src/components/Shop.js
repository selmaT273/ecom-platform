import React from "react";
import './Shop.css';
import Product from './Product';
import data from '../data/product-data.json';

export default class Shop extends React.Component{
  render(){
    const productData = data;

    return(
      <>
        <h3 id="welcome">Shop the Collection</h3> 
        <div class="product-container">
          {
            productData.map(product => (
              <Product img={product.image_url} title={product.name}/>
            ))
          }
        </div>
      </>
    )
  }
}