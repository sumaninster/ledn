// src/items/items.service.ts

/**
 * Data Model Interfaces
 */

 import { Item } from "./item.interface";
 import { Items } from "./items.interface";
 import * as data from "./data/accounts_large.json";

 /**
 * Variables
 */
let items: Items = data;

function sortBy(prop: any, order: string) {
  switch (order) {
    default:
      return function(a: any,b: any){
        if (a[prop] > b[prop]){
            return 1;
        } else if(a[prop] < b[prop]){
            return -1;
        }
        return 0;
      }
    case "desc":
      return function(a: any,b: any){
        if (a[prop] < b[prop]){
            return 1;
        } else if(a[prop] > b[prop]){
            return -1;
        }
        return 0;
      }
  }
}

/**
 * Service Methods
 */

export const filter = async (country: string, mfa: string, fname: string, lname: string, 
  sortcol: string, order: string, page: number, limit: number): Promise<Item[]> => {
  
  let obj = Object.values(items);
  
  const re_country = new RegExp(country , 'gi');
  const re_mfa = new RegExp(mfa , 'gi');
  const re_fname = new RegExp(fname , 'gi');
  const re_lname = new RegExp(lname , 'gi');

  if (country != '-')
    obj = obj.filter(d => re_country.test(d.country))
  if (mfa != '-')
    obj = obj.filter(d => re_mfa.test(d.mfa))
  if (fname != '-')
    obj = obj.filter(d => re_fname.test(d.firstName))
  if (lname != '-')
    obj = obj.filter(d => re_lname.test(d.lastName))

  switch (sortcol) {
    case "tokens":
      obj.sort(sortBy("amt", order))
      break;
    case "created":
      obj.sort(sortBy("createdDate", order))
      break;
  }

  if (page <= 0) page = 1;
  if (limit <= 0) limit = 1;
  if (limit > 1000) limit = 1000;

  let start = page * limit - limit;
  let end = page * limit;

  return obj.slice(start, end);
};