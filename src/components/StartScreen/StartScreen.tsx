import * as React from 'react';
import './styles.css';
import logo from '../../common/img/logo.png';

const className = 'StartScreen'; 

const StartScreen = () => {
  return ( 
    <div className={`${className}__container`}>
      <img className={`${className}__logo`} src={logo} alt="Logo" />
    </div>
   );
}
 
export default StartScreen;