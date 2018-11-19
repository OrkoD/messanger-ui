import { Contact } from './contact';

export interface Channel {
  _id?: string;
  participant: Contact;
  createdAt: string;
}
