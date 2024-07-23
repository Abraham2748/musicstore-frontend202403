import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EventCardComponent } from '../shared/components/event-card/event-card.component';
import { HomeService } from './home.service';
import { Concert } from '../shared/models/concert.model';
import { Genre } from '../shared/models/genre.model';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HighlightableDirective } from '../shared/directives/highlightable.directive';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatSelectModule,
    EventCardComponent,
    NgIf,
    NgFor,
    HighlightableDirective,
    AsyncPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  homeService = inject(HomeService);

  concerts$ = new Observable<Concert[]>();
  genres$ = new Observable<Genre[]>();

  ngOnInit() {
    const data$ = this.homeService.getData().pipe(shareReplay());

    this.concerts$ = data$.pipe(map((response) => response.concerts));
    this.genres$ = data$.pipe(map((response) => response.genres));
  }
}
