import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Aboutme from './components/Aboutme/Aboutme';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
        <Header/>
        <Main/>
        <Aboutme/>
        <Projects/>
        <Footer/>
    </div>
  );
}
export default App;
