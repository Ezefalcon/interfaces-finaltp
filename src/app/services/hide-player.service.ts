import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HidePlayerService {
  hide$ = new EventEmitter();

  constructor() { }
}
