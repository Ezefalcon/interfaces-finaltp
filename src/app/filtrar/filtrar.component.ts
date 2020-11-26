import { Component, OnInit,EventEmitter } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.scss']
})
export class FiltrarComponent implements OnInit {
  show: boolean = false;
  mobile:boolean;
  genres: any[] = ['Pop', 'Metal', 'Electro', 'Rock', 'Rock Nacional'];
  toppings: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.toppings = new FormControl()
    let mobileResolution = 700;
    let currentResolution = screen.width;

    if (currentResolution < mobileResolution)
      this.mobile = true;
    else
      this.mobile = false;
  }

  showFilters() {
    this.show = !this.show;
  }

}
