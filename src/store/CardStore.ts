import axios, { AxiosError } from "axios";
import { makeAutoObservable } from "mobx";
import { ICard } from "../common/types/ICard";

interface IError {
  type: string,
  message: string
}

class CardStore {
  cards:ICard[] = [];
  message: string = '';
  modalState: boolean = false;

  constructor() {
    makeAutoObservable(this)
  }
  setModalState = () => {
    this.modalState = false
  };
  setMessage = (companyId: string, name: string) => {
    this.message = `Нажата кнопка: ${name}, ид комании: ${companyId}`
    this.modalState = true;
  }
  fetchCards = async () => {
    let data = JSON.stringify({
      "offset": 0,
      "limit": 5
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://devapp.bonusmoney.pro/mobileapp/getAllCompanies',
      headers: { 
        'TOKEN': '123', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    try {
      const response = await axios.request(config);
      this.cards = response.data.companies;
    } catch (error) {
      const e = error as AxiosError<IError>;     
      if (e?.response?.status === 401) {
        this.modalState = true;
        this.message = 'Ошибка авторизации';
      };
      if (e?.response?.status === 400) {
        this.modalState = true;
        this.message = e.response?.data?.message;
        console.log(e.response?.data?.message)
      };
      if (e?.response?.status === 500) {
        this.modalState = true;
        this.message = 'Всё упало';
      };
    }
  };
}

export default new CardStore();
