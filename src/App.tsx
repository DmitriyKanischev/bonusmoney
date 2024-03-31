import React from 'react';
import './App.css';
import HeaderContainer from './components/Header';
import MainBlockContainer from './components/MainBlock';
import PopupContainer from './components/Popup';
import CardStore from './store/CardStore';
import { observer } from 'mobx-react-lite';

const App = observer( () => {
  console.log(CardStore.modalState)
  return (
    <>
      {CardStore.modalState && <PopupContainer message={CardStore.message} />}
      <div className="container">
        <HeaderContainer />
        <MainBlockContainer />
      </div>
    </>
  );
}
)

export default App;
