import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {HabitCard} from './habit-card/habit-card';
import {Calendar} from './calendar/calendar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    HabitCard,
    Calendar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('homepage');
}
