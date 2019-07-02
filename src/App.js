import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Tips from './components/Tips/Tips';
import Get from './components/Get/Get';
import Footer from './components/Footer/Footer';
import Team from './components/Team/Team';

function App() {
  return (
    <div>
       <Header/>
      <Services/>
      <Products/>
      <Team />
      <Tips />
      <Get />
      <Footer />
     
    </div>
    
    
    
  );
}

export default App;
