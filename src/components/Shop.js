import React from "react";
import './Shop.css';
import Product from './Product';
import { Row, Container, Col } from 'react-bootstrap';
import data from '../data/product-data.json';

export default class Shop extends React.Component{
  render(){
    const productData = data;

    return(
      <>
        <h3 id="welcome">Shop the Collection</h3> 
        <Container class="product-container">
          <Row className="g-4">
            {
              productData.map(product => (
                <Col>
                  <Product img={product.image_url} title={product.name}/>
                </Col>
              ))
            }
          </Row>
        </Container>
      </>
    )
  }
}