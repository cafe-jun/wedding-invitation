export interface Person {
  name: string;
  father: string;
  mother: string;
}

export interface Venue {
  name: string;
  address: string;
  floor: string;
  latitude?: number;
  longitude?: number;
}

export interface Account {
  bank: string;
  account: string;
  holder: string;
}

export interface WeddingInfo {
  date: string;
  time: string;
  groom: Person;
  bride: Person;
  venue: Venue;
  accounts: {
    groom: Account;
    bride: Account;
  };
}

export interface GuestbookEntry {
  id?: string;
  name: string;
  password: string;
  message: string;
  date: string;
  createdAt?: Date;
}
