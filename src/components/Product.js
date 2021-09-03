import React from "react";
import { Card } from "react-bootstrap";

export default class Product extends React.Component {
  render(){
    return(
      <>
        <Card>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    )
  }
}