import * as React from 'react';
import Popup from './Popup';

export interface IMessage {
  message: string
}

const PopupContainer:React.FC<IMessage> = (props) => <Popup message={props.message} />;

export default PopupContainer;
