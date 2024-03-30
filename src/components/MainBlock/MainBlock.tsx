import * as React from 'react';
import './styles.css';
import LoaderContainer from '../Loader';

const className = 'MainBlock';

const MainBlock = () => {
  return ( 
    <body className={`${className}__container`}>
      <LoaderContainer />
    </body>
   );
}
 
export default MainBlock;