import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Word} from "@flash-card/libs/fc-model";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'flash-card-word-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.scss'],
})
export class WordCardComponent {
  @Input() word!: Word
}
