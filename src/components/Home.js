import React from "react"
import { Card } from 'react-bootstrap';
import './Home.css';

export default class Home extends React.Component{
  render() {
    const shopName = this.props.shopInfo.name;
    return(
      <>
        <h3 id="welcome">Welcome to {shopName}</h3>
        <Card className="home-banner" bg="dark">
          <Card.Img src="https://images.unsplash.com/photo-1622218286192-95f6a20083c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="text-center">Welcome to {shopName}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </>
    )
  }
}