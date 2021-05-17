import './App.css';
import React from 'react';
import Header from './components/header';
import MenuMobile from './components/menu-mobile';
import MenuDesktop from './components/menu-desktop';
import Deals from './components/deals';
import Member from './components/member';
import Recent from './components/recent';
import Options from './components/options';
import AppDownload from './components/app-download';
import Contact from './components/contact';

const App = () => {
  return (
    <>
      <Header />
      <MenuMobile />
      <MenuDesktop />
      <div className="bottom">
        <div className="rearrange">
          <Deals />
          <Member />
          <Recent />
        </div>
        <Options />
        <AppDownload />
      </div>
      <Contact />
    </>
  );
};

export default App;
