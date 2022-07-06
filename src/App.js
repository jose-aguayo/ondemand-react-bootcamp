import React from 'react';
import './styles.css';
import Footer from './components/Footer/index'
import Header from './components/Header/index'
import HomePage from './components/HomePage';


function App() {

  return (
    <React.Fragment>
      <Header />
      <HomePage />
      <Footer />
    </React.Fragment>
    
  )

}

export default App;
