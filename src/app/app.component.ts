import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    EventDetailComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'musical-events';
}
