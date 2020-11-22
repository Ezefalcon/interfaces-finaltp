import { Component, OnInit } from '@angular/core';
import { SongListenerService } from '../services/song-listener.service';

@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.scss']
})
export class ListaCancionesComponent implements OnInit {
  canciones: any;

  constructor(private songService : SongListenerService) {
    this.canciones = [
      {
        "reproduciendo": true,
        "img":"https://i.ibb.co/28PQ0mk/ab67616d000048517368325f5998ef48d4fb5401.jpg",
        "nombre":"Positions",
        "artista":"Ariana Grande",
        "album":"Postitions",
        "duracion": "2:52",
        "calificacion": 5 
      },
      {
        "reproduciendo": false,
        "img":"https://i.ibb.co/Y7ftFMz/ab67616d0000485177ada0863603903f57b34369.jpg",
        "nombre":"What You Know Bout Love",
        "artista":"Pop Smoke",
        "album":"Shoot for the stars",
        "duracion": "2:40",
        "calificacion": 4
      },
      {
        "reproduciendo": false,
        "img":"https://i.ibb.co/1sH4Nq4/ab67616d00004851d46a8fffbe6c8630784f04da.jpg",
        "nombre":"Lemonade",
        "artista":"Internet Money",
        "album":"Lemonade",
        "duracion": "3:15",
        "calificacion": 1
      },
      {
        "reproduciendo": false,
        "img":"https://i.ibb.co/sRP5BKR/ab67616d0000485183b22beb73e2014b20159685.jpg",
        "nombre":"Lonely",
        "artista":"Justin Bieber",
        "album":"Lonely",
        "duracion": "2:29",
        "calificacion": 3
      }
    ]
  }

  playSong(song) {
    this.songService.currentSong$.emit(song);
  }

  ngOnInit(): void {
  }

}
