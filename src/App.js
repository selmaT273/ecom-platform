import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './components/wheelbarrow.png';
import './App.css';
import shopData from './data/shop-data.json';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';

export default class App extends React.Component {
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
      <div>
        <h1 id="nav-h1">{shopData.name} <img src="wheelbarrow.png" alt="" /> </h1>
        <Tabs
          id="tabbys"
          activeKey={this.state.key}
          onSelect={(k) => this.setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            <Home shopInfo={shopData}/>
          </Tab>
          <Tab eventKey="shop" title="Shop">
            <Shop />
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <Contact />
          </Tab>
        </Tabs>
      </div>
    )
  }
}
