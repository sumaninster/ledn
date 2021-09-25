// src/items/item.interface.ts

export interface BaseItem {
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  dob: string;
  mfa: string;
  amt: number;
  createdDate: string;
  referredBy: string;
  }
  
  export interface Item extends BaseItem {
    id: number;
  }