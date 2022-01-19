import React from 'react';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Section from './component/Section.js';
// import RouterPage from './router/RouterPage.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      {/* <RouterPage /> */}
      <Footer />
    </div>
  );
}

export default App;
