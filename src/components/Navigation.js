import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

export default class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      key: 'home',
    }
  }

  setKey = (event) => {
    this.setState({
      key: event.target,
    })
    console.log(this.state.key);
  }

  render(){
    return(
      <Tabs
        id="tabbys"
        activeKey={this.state.key}
        onSelect={(k) => this.setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <p>Hooooome</p>
        </Tab>
        <Tab eventKey="shop" title="Shop">
          <p>time to shop</p>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <p>contact infooo</p>
        </Tab>
      </Tabs>
    )
  }
}