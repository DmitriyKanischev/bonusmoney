import * as React from 'react';
import './styles.css';

const className = 'Header';

const Header = () => {
  return ( 
    <header className={`${className}__container`}>
      <p className={`${className}__text`}>
        Управление картами
      </p>
    </header>
   );
}
 
export default Header;