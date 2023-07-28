import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetActionsService {

  refresh() {
    console.log('do refresh logic...');
  }
  
  addNewItem() {
    console.log('Add new item to widget...');
  }
}
