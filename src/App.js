import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Aside from './components/Aside';
import Main from './components/Main';
import Email from './components/Email';
import Category from './components/Category';
import Footer from './components/Footer';
import {  category, AllData } from './components/Category/db'

const App = () => {
 
  return (
    <>
      <div className="App">
     <Header/>
     <Nav/>
      <Aside/>
     <Main dataCard={AllData}  />
     <Email/>
     <Category  dataCard={AllData} category={category}/>
       <Footer/>
      </div>
    </>
  );
};

export default App;
