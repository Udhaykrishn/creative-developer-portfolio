import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <LandingPage />
      </div>
    </ParallaxProvider>
  );
}

export default App;