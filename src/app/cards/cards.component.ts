import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() cards: any;
  @Input() artist: boolean;

  constructor() {
    
  }

  ngOnInit(): void {
  }

}

/**
 * <app-cards [cards]="cards" [artist]="false"></app-cards>
 * this.cards = [
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
      }
    ]
 */