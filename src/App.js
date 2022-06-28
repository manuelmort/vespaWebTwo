import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Apprenticeship from './components/Apprenticeship';
import Footer from './components/Footer';
import Tutorial from './components/Tutorial';
import Logo from './components/Logo';
import './App.css';



function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='home' element={<Home/>}/>
          <Route path = "/apprenticeship101" element ={<Apprenticeship/>}/>
          <Route path = "/tutorial" element = {<Tutorial/>}/>
          <Route path = "/logo" element = {<Logo/>}/>

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
