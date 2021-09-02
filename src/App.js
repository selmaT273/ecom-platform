import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navigation />
          <Main />
        </BrowserRouter>
      </>
    );
  }
}
