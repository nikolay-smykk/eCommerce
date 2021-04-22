import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';

import { Switch, Route } from 'react-router-dom';

import Home from './screen/index';
import About from './screen/about';
import Menu from './screen/menu';

function App() {
  const [isOpen, setIseOpen] = useState(false);

  const toggle = () => {
    setIseOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 766 && isOpen) {
        setIseOpen(false);
      }
    };
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/menu" exact component={Menu} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
