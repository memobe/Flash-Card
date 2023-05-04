import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WordCardComponent} from "../word-card/word-card.component";
import {Word} from "@flash-card/libs/fc-model";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'flash-card-home',
  standalone: true,
  imports: [CommonModule, WordCardComponent, MatButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  words: Word[] = []

  ngOnInit(): void {
    this.words = [
      {
        name: 'Book',
        sentence: 'I love book'
      },{
        name: 'Book',
        sentence: 'I love book'
      },{
        name: 'Book',
        sentence: 'I love book'
      },
    ]
  }
}
