import { Injectable } from '@angular/core';

/**
 * Fake store
 */

@Injectable({
  providedIn: 'root'
})
export class Store<T> {

  constructor() { }

  select(slice: string): { state: T | null } {
    return {
      state: null
    }
  }
}
