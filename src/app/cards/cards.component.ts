import { Component, Input, OnInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() cards: any;
  @Input() artist: boolean;
  scroll: number;
  last: boolean;
  first: boolean;

  constructor() {
    this.scroll = 0;
    this.first = true;
    this.last = false;
  }

  ngOnInit(): void {
  }

  next(el: HTMLElement) {
    this.scrollElement(el,"next");
  }
  
  back(el: HTMLElement) {
    this.scrollElement(el,"back");
  }

  scrollElement(el:HTMLElement, direction:string) {
    let maxScroll = el.scrollWidth - el.clientWidth;

    if (direction == "next") {
      this.first = false;
      this.scroll = el.offsetWidth + this.scroll;
      if (this.scroll > maxScroll) {
        this.last = true;
      } else {
        this.last = false;
      }

    } else if (direction == "back") {
      this.last = false;
      this.scroll = this.scroll - el.offsetWidth;
      if (this.scroll <= 0) {
        this.scroll = 0;
        this.first = true;
      } else {
        this.first = false;
      }
    }

    console.log(el.offsetWidth)

    el.scroll({
      left: this.scroll,
      top: 0,
      behavior: 'smooth'
    });

    console.log("first "+this.first);
    console.log("last "+this.last);
  }
}