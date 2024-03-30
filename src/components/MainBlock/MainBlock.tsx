import * as React from 'react';
import './styles.css';
import LoaderContainer from '../Loader';
import { requestController } from '../..';
import { ICards } from '../../common/types/ICards';

const className = 'MainBlock';

const MainBlock = () => {
  const [cards, setCards] = React.useState<ICards[]>();

  const fetchCards = async () => {
    const response = await requestController.post<ICards[]>('mobileapp/getAllCompanies');
    if (response.status === 401) {
      console.log('Ошибка авторизации');
    }
    if (response.status === 400) {
      console.log(response.data.message);
    }
    if (response.status === 500) {
      console.log('Всё упало :(')
    }
    setCards(response.data);
    return response.data;
  };

  React.useEffect(()=> {
    fetchCards()
  },[]);
  console.log(cards)
  return ( 
    <body className={`${className}__container`}>
      <LoaderContainer />
    </body>
   );
}
 
export default MainBlock;