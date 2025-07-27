import {Component} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'calendar',
  imports: [
    MatGridListModule,
  ],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export class Calendar {
  month = new Array(31)
    .fill(null)
    .map((_, i) => i + 1);
}
