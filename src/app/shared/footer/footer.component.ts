import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  volumeBar:boolean;
  califications: boolean;
  play:boolean;
  fav:boolean;

  constructor() {
    this.volumeBar = false;
    this.califications = false;
    this.play = false;
    this.fav = !this.fav;
  }

  ngOnInit(): void {
  }

  openVolume(){
    this.volumeBar = !this.volumeBar;
  }

  openCalification() {
    this.califications = !this.califications;
  }

  playPause() {
    this.play = !this.play;
  }

  favorite() {
    this.fav = !this.fav;
  }

}
