export interface Message {
  _id: string;
  title: string;
  text: string;
  recipient?: string;
  sender?: string;
  type: string;
  createdAt: string;
  starred: boolean;
}
