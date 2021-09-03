import React from "react"
import './Home.css';

export default class Home extends React.Component{
  render() {
    const shopName = this.props.shopInfo.name;
    return(
      <>
        <h3 id="welcome">Welcome to {shopName}</h3>
      </>
    )
  }
}