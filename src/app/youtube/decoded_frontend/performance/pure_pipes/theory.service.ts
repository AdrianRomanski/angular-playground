import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TheoryService {
  theories = [
    { title: 'Quantum Theory', userId: 1 },
    { title: 'Theory of Relativity', userId: 2 },
  ];

  constructor() {}

  getTheory(userId: number) {
    return this.theories.find((t) => t.userId === userId);
  }
}
