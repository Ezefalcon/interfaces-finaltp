import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FiltrarMobileComponent } from './filtrar-mobile/filtrar-mobile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ListaCancionesComponent } from './lista-canciones/lista-canciones.component';
import { FiltrarComponent } from './filtrar/filtrar.component';
import { SearchComponent } from './search/search.component';
import { SeePlaylistComponent } from './see-playlist/see-playlist.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { SeeSongComponent } from './see-song/see-song.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltrarMobileComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    HomeComponent,
    SidebarComponent,
    ListaCancionesComponent,
    FiltrarComponent,
    SearchComponent,
    SeePlaylistComponent,
    OpinionesComponent,
    SeeSongComponent,
    RecommendationsComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    AppRoutingModule,
    MatTooltipModule,
    MatSidenavModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
