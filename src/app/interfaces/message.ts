export interface Message {
  _id: string;
  title: string;
  text: string;
  receiver?: string;
  sender?: string;
  type: string;
  createdAt: string;
  starred: boolean;
}
