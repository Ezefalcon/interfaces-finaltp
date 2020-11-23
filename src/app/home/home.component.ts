import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  playlists: any;
  titlePlaylist:any;
  titlePodcast:any;
  podcasts:any;

  constructor() {
    this.playlists = [
      {
        "img":"https://i.ibb.co/W5tTvfx/spotify-img.jpg",
        "title":"Today's Top Hits"
      },
      {
        "img":"https://i.ibb.co/1sfL3Zk/spotify-playlist2.jpg",
        "title":"Mates y musica"
      },
      {
        "img":"https://i.ibb.co/9ggxX66/ab67706f0000000240f1cd21ec9d87a1fe00427c.jpg",
        "title":"Pool party"
      },
      {
        "img":"https://i.ibb.co/6WCWG2B/ab67706f00000002aade2f84b36613140a4ffe0e.jpg",
        "title":"Cachengue en casa"
      },
      {
        "img":"https://i.ibb.co/QCVF8Ts/ab67706f000000025ffc36370c0825c6114bd466.jpg",
        "title":"Calma"
      },
      {
        "img":"https://i.ibb.co/fkjtWxL/ab67706f000000028fc71e2599fb11d381046c9d.jpg",
        "title":"Hits acusticos"
      },
      {
        "img":"https://i.ibb.co/0nLbvfm/ab67706f000000029482a47d9687733e9271176f.jpg",
        "title":"Canta en la ducha"
      },
      {
        "img":"https://i.ibb.co/LtQ9gsP/ab67706f0000000246038a402592bf87174a8442.jpg",
        "title":"Hits Alegres"
      },
      {
        "img":"https://i.ibb.co/HPMcMp0/ab67706f000000023034208bb3dc61b40aa9e91b.jpg",
        "title":"Modo acústico"
      },
      {
        "img":"https://i.ibb.co/9vgD3NX/ab67706f000000025dda570f43926bcbfb397c17.jpg",
        "title":"Hora de la Lloración"
      },
      {
        "img":"https://i.ibb.co/rmw8Wzf/ab67706f000000020f189280da541cd3e6e10cef.jpg",
        "title":"Indie Argentina"
      },
      {
        "img":"https://i.ibb.co/S38tY3T/ab67706f00000002e08f1248c3c7e250225c3813.jpg",
        "title":"Rock Argentino"
      },
      {
        "img":"https://i.ibb.co/fDKMp5k/ab67706f00000002658c867eeff08584ab273ba6.jpg",
        "title":"La Previa"
      },
      {
        "img":"https://i.ibb.co/fvhLcgW/ab67706f00000002373a52c05d01c8fe298eda2e.jpg",
        "title":"Mate Relax"
      },
      {
        "img":"https://i.ibb.co/0FwSzsY/ab67706f0000000213a02d059c0479e65a850267-1.jpg",
        "title":"Feelin Good"
      }
    ]

    this.podcasts = [
      {
        "img":"https://i.ibb.co/MSFKV0g/podcast.jpg",
        "title":"La mente en forma"
      },
      {
        "img":"https://i.ibb.co/51kBP2Z/1.jpg",
        "title":"Comedia"
      },
      {
        "img":"https://i.ibb.co/YjGHcFX/bf2cdc37159b9372240250bf64caab1715b403f5.jpg",
        "title":"Podcast in english"
      },
      {
        "img":"https://i.ibb.co/zQPCcZK/ac6f0d04608b86881e4b3125df459755bfb8dd33d85521dd4fe490ce4279e2630ef1ca91b2c235d4f95021c6a4e8495aca8c.jpg",
        "title":"Podcast para dormir"
      },
      {
        "img":"https://i.ibb.co/TgRy4kB/17544f55366b2290142b5c38bc8dd1c90239dc1b.jpg",
        "title":"Podcast italiano"
      },
      {
        "img":"https://i.ibb.co/0tHDZGD/ab67616d00001e028db99aa871e6e25a94264e90.jpg",
        "title":"Criaturas podcast"
      }
    ]
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
