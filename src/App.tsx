import React from 'react';
import './App.css';
import HeaderContainer from './components/Header';
import MainBlockContainer from './components/MainBlock';
import PopupContainer from './components/Popup';
import CardStore from './store/CardStore';
import { observer } from 'mobx-react-lite';
import StartScreenContainer from './components/StartScreen';

const App = observer( () => {
  const [startState, setStartState] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setStartState(false)
    }, 3000)
  },[])
  return (
    <>
      <>
        {startState && <StartScreenContainer />}
      </>
      {!startState && 
      <>
        {CardStore.modalState && <PopupContainer message={CardStore.message} />}
        <div className="container">
          <HeaderContainer />
          <MainBlockContainer />
        </div>
      </>}
    </>
  );
}
)

export default App;
