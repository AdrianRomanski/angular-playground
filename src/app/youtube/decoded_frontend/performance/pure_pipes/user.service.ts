import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly users = [
    { id: 1, name: 'Niels Bohr' },
    { id: 2, name: 'Albert Einstein' },
  ];

  constructor() {}
}
