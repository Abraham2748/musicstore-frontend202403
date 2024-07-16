import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EventCardComponent } from '../shared/components/event-card/event-card.component';
import { HomeService } from './home.service';
import { Concert, emptyConcert } from '../shared/models/concert.model';
import { Genre, emptyGenre } from '../shared/models/genre.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatSelectModule,
    EventCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  homeService = inject(HomeService);

  concertTest1: Concert = emptyConcert;
  concertTest2: Concert = emptyConcert;
  concertTest3: Concert = emptyConcert;
  concertTest4: Concert = emptyConcert;

  genreTest1: Genre = emptyGenre;
  genreTest2: Genre = emptyGenre;
  genreTest3: Genre = emptyGenre;

  ngOnInit() {
    this.homeService.getData().subscribe((response) => {
      this.concertTest1 = response.concerts[0];
      this.concertTest2 = response.concerts[1];
      this.concertTest3 = response.concerts[2];
      this.concertTest4 = response.concerts[3];

      this.genreTest1 = response.genres[0];
      this.genreTest2 = response.genres[1];
      this.genreTest3 = response.genres[2];
    });
  }
}
