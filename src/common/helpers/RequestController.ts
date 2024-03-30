import axios, { AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import { IResponseError } from "../types/IResponseError";

export default class RequestController {
  BACKEND_URL = 'http://devapp.bonusmoney.pro/';

  bmAxios = axios.create({
    baseURL: this.BACKEND_URL,
  });
  
  private errorHandler(error: unknown): IResponseError {
    if (isAxiosError(error)) {
      if (error.response) {
        if (error.response.status >= 400 && error.response.status < 500) {
          return {
            status: error.response.status,
            data: error.response.data,
            isClientError: true,
          };
        }
      }
    }
    return {
      status: 0,
      data: error,
      isClientError: false,
    };
  }


  async post<T>(url: string, params?: AxiosRequestConfig & T): Promise<AxiosResponse<Response> | IResponseError> {
    let response;
    try {
      response = await this.bmAxios.post(url, params);
    } catch (error: unknown) {
      return this.errorHandler(error);
    }
    
    return response;
  };
}
