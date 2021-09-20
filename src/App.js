import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Aside from './components/Aside';
import Main from './components/Main';
import Email from './components/Email';
import Category from './components/Category';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className="App">
     <Header/>
     <Nav/>
      <Aside/>
     <Main/>
     <Email/>
     <Category/>

       <Footer/>
      </div>
    </>
  );
};

export default App;
