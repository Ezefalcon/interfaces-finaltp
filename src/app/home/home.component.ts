import { Component, OnInit } from '@angular/core';
import playlistsJson from './mock/playlists.json';
import podcastsJson from './mock/podcasts.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  playlists:any = playlistsJson;
  podcasts:any = podcastsJson;
  titlePlaylist:any;
  titlePodcast:any;

  constructor() {
/*

    this.artists = [
      {
        "img":"https://i.ibb.co/Y3X0LCy/artist.jpg",
        "title":"Sech"
      },
      {
        "img":"https://i.ibb.co/vkxTFnP/1.jpg",
        "title":"Maluma"
      },
      {
        "img":"https://i.ibb.co/jMDCfWK/4527ee5f764813d9e9784211b1264e39907449de.jpg",
        "title":"Reik"
      },
      {
        "img":"https://i.ibb.co/MPgQMnx/8130e70162ded2c19d67e2ae71772bc373fe0334.jpg",
        "title":"KHEA"
      },
      {
        "img":"https://i.ibb.co/gtNNzYB/a8b4befcb6d3bc9c942a0c97bf3d64d735920f72.jpg",
        "title":"Sebastian Yatra"
      },
      {
        "img":"https://i.ibb.co/4sVkCmm/23009960c33ef08d5973440cca17985a6c70a515.jpg",
        "title":"Bad Bunny"
      }
    ]
    */

    this.titlePlaylist = {
      "title": "Tus playlists",
      "clickable":true,
      "link": ""
    }

    this.titlePodcast = {
      "title": "Tus podcasts",
      "clickable":true,
      "link": ""
    }
  }

  ngOnInit(): void {
  }

}
