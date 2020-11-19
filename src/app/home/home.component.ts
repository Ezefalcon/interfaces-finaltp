import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: any;

  constructor() {
    this.cards = [
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
  }

  ngOnInit(): void {
  }

}
