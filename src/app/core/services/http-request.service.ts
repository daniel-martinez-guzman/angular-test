import { Injectable } from '@angular/core';
import axios from 'axios';
import { EndPoints } from '../constants/end-points';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  constructor() {}

  private buildAPI = (url: string): string => {
    return EndPoints.instance.buildUrl(url);
  };

  getHttpRequest = async (url: string) => {
    try {
      const response = await axios.get(this.buildAPI(url));
      if (response.status !== 200) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      return response.data;
    } catch {
      throw new Error(`get request error with ${this.buildAPI(url)} API.`);
    }
  };
}
