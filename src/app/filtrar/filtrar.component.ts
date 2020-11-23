import { Component, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.scss']
})
export class FiltrarComponent implements OnInit {
  show: EventEmitter<null> = new EventEmitter();
  mobile:boolean;

  constructor() { }

  ngOnInit(): void {
    let mobileResolution = 700;
    let currentResolution = screen.width;
    
    if (currentResolution < mobileResolution)
      this.mobile = true;
    else
      this.mobile = false;
  }

  showFilters() {
    if (this.mobile) {
      //show filters for mobile
      this.show.emit();
    } else {
      //show filters for desktop

    }
  }

}
