import { Component, inject, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { RouterOutlet } from '@angular/router';
import {
  NotificationsService,
  Options,
  SimpleNotificationsModule,
} from 'angular2-notifications';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleNotificationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'musical-events';
  notificationOptions: Options = {
    position: ['top', 'right'],
    timeOut: 3000,
  };
}
