import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtrar-mobile',
  templateUrl: './filtrar-mobile.component.html',
  styleUrls: ['./filtrar-mobile.component.scss']
})
export class FiltrarMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openFilter(event) {
    let element = event.srcElement.parentElement;
    let elementClicked = element.nodeName;
    while (elementClicked != "LI") {
      element = element.parentElement;
      elementClicked = element.nodeName;
    }
    let divContent = element.querySelector(".content");
    let arrowOpen = element.querySelector("#open-arrow");
    arrowOpen.classList.toggle("rotate");
    divContent.classList.toggle("open")
  }

}
