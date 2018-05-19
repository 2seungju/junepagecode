import React, { Component } from 'react';
import styled from 'styled-components';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

import { Pen, Gothic } from './utils/Font';
// import Nanum from './utils/font/Nanum_Gothic_Coding';
import './App.css';

const Layout = styled.div`
  color: #333333;
  font-family: ${Gothic};
`;

class App extends Component {
  render() {
    console.log(Pen);
    return (
      <Layout>
        <NavBar />
        <Home />
        <About />
        <Footer />
      </Layout>
    );
  }
}

export default App;
