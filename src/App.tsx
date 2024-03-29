import React from 'react';
import './App.css';
import StartScreenContainer from './components/StartScreen';
import HeaderContainer from './components/Header';
import MainBlockContainer from './components/MainBlock';

function App() {
  return (
    <div className="container">
      {/* <StartScreenContainer /> */}
      <HeaderContainer />
      <MainBlockContainer />
    </div>
  );
}

export default App;
