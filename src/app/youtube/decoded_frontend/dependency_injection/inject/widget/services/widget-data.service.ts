import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WidgetDataService {

  constructor() { }

  loadData() {
    return of({ title: 'some data...' })
  }
}
