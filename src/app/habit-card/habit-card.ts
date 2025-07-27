import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {HabitBlock} from './habit-block/habit-block';

@Component({
  selector: 'habit-card',
  imports: [
    MatGridListModule,
    MatCardModule,
    HabitBlock,
  ],
  templateUrl: './habit-card.html',
  styleUrl: './habit-card.css'
})
export class HabitCard {
  year = new Array<bigint>(365);
}
