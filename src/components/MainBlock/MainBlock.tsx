import * as React from 'react';
import './styles.css';
import LoaderContainer from '../Loader';
import axios from 'axios';
import { ICards } from '../../common/types/ICards';

const className = 'MainBlock';

const MainBlock = () => {
  const [cards, setCards] = React.useState<ICards[]>();

  const fetchCards = async () => {
    let data = JSON.stringify({
      "offset": 0,
      "limit": 5
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://devapp.bonusmoney.pro/mobileapp/getAllCompaniesIdeal', //!  !  ! ---------getAllCompanies
      headers: { 
        'TOKEN': '123', 
        'Content-Type': 'application/json'
      },
      data : data
    };

    const response = await axios.request(config);
    
    if (response.status === 401) {
      console.log(response.data.message);
    };
    if (response.status === 400) {
      console.log(response.data.message);
    };
    if (response.status === 500) {
      console.log('Всё упало');
    };
    setCards(response.data);
  };

  React.useEffect(()=> {
    fetchCards()
  },[]);
  console.log(cards)
  return ( 
    <div className={`${className}__container`}>
      {!cards?.length && <LoaderContainer />}
    </div>
   );
}
 
export default MainBlock;