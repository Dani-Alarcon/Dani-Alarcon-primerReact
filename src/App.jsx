import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
//import './App.css'
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Section />
        <Footer />
      </div>
    )
  }
}
export default App
