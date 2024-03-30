import * as React from 'react';
import './styles.css';
import Ring from '../Ring/Ring';

const className = 'Loader';

const Loader = () => {
  return ( 
    <div className={`${className}__container`}>
      <Ring />
      <p className={`${className}__text`}>Подгрузка компаний</p>
    </div>
   );
}
 
export default Loader;