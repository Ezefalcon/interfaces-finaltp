import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import songs from './mock/songs.json';

@Component({
  selector: 'app-see-song',
  templateUrl: './see-song.component.html',
  styleUrls: ['./see-song.component.scss']
})
export class SeeSongComponent implements OnInit {
  id: string;
  songs: any;
  song: any;
  favorite:boolean;
  private sub: any;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      for (let i = 0; i < songs.length; i++) {
        let idSong = songs[i]["link"].substring(5)
        if (idSong == this.id) {
          this.song = songs[i];
        }
      }
    });
  }

}
