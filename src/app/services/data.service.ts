import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get(`${this.baseUrl}/messages`);
  }

  getMessage( id: string ) {
    return this.http.get(`${this.baseUrl}/messages/${id}`);
  }

  deleteMessage( id: string ) {
    return this.http.delete(`${this.baseUrl}/messages/${id}`);
  }

  updateMessage( id: string, updateData: any ) {
    return this.http.put(`${this.baseUrl}/messages/${id}`, updateData);
  }
  
}
