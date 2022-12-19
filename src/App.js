import React from 'react'

import Navbar from './components/Navbar';
import About from './components/About';
import Menu from './components/Menu';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Order from './components/Order';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Menu />
      <Services />
      <Reviews />
      <Order />
      <Footer />
    </div>
  )
}

export default App
