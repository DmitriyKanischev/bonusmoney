import axios from "axios";
import { makeAutoObservable } from "mobx";
import { ICard } from "../common/types/ICard";

class CardStore {
  cards:ICard[] = [];

  constructor() {
    makeAutoObservable(this)
  }

  fetchCards = async () => {
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
    this.cards = response.data.companies;
  };
}

export default new CardStore();
