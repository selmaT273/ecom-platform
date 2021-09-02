import React from "react"

export default class Home extends React.Component{
  render() {
    return(
      <>
        <h3>Welcome to {this.props.shopInfo.name}</h3>
      </>
    )
  }
}