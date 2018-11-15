import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/message';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  addMessage( message: Message ) {
    return this.http.post(`${this.baseUrl}/messages`, message);
  }

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
  
  addSentMessage( message: Message ) {
    return this.http.post(`${this.baseUrl}/sent-messages`, message);
  }

  getSentMessages() {
    return this.http.get(`${this.baseUrl}/sent-messages`);
  }

  getSentMessage( id: string ) {
    return this.http.get(`${this.baseUrl}/sent-messages/${id}`);
  }

  deleteSentMessage( id: string ) {
    return this.http.delete(`${this.baseUrl}/sent-messages/${id}`);
  }

  updateSentMessage( id: string, updateData: any ) {
    return this.http.put(`${this.baseUrl}/sent-messages/${id}`, updateData);
  }

  addContact( contact: Contact ) {
    return this.http.post(`${this.baseUrl}/contacts`, contact);
  }

  getContacts() {
    return this.http.get(`${this.baseUrl}/contacts`);
  }
  
}
