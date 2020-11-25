import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SeePlaylistComponent } from './see-playlist/see-playlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:search', component: SearchComponent },
  { path: 'playlist/:id', component: SeePlaylistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}