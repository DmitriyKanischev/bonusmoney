import * as React from 'react';
import './styles.css';
import CardStore from '../../store/CardStore';
import { observer } from 'mobx-react-lite';
import { IMessage } from '.';

const className = 'Popup';

const Popup:React.FC<IMessage> = observer( (props) => {
  return ( 
    <div className={`${className}__overlay`}>
      <div className={`${className}__modal`}>
        <p
          style={{
            color: '#949494', 
            fontSize: '4vw',
            marginBottom: '6vw'
          }}
        >{props.message}</p>
        <button 
          type='button'
          className={`${className}__button`}
          onClick={() => CardStore.setModalState()}
        >
          Хорошо
        </button>
      </div>
    </div>
   );
}
);
 
export default Popup;