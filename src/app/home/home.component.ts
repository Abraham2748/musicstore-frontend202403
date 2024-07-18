import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EventCardComponent } from '../shared/components/event-card/event-card.component';
import { HomeService } from './home.service';
import { Concert } from '../shared/models/concert.model';
import { Genre } from '../shared/models/genre.model';
import { NgFor } from '@angular/common';
import { HighlightableDirective } from '../shared/directives/highlightable.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatSelectModule,
    EventCardComponent,
    NgFor,
    HighlightableDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  homeService = inject(HomeService);

  concerts: Concert[] = [];
  genres: Genre[] = [];

  ngOnInit() {
    this.homeService.getData().subscribe((response) => {
      this.concerts = response.concerts;
      this.genres = response.genres;
    });
  }
}
