import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WordCardComponent} from "../word-card/word-card.component";
import {Word} from "@flash-card/libs/fc-model";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {SwiperElementDirective} from "@flash-card/ui/swiper";
import {SwiperOptions} from "swiper";

@Component({
  selector: 'flash-card-home',
  standalone: true,
  imports: [CommonModule, WordCardComponent, MatButtonModule, RouterLink, SwiperElementDirective ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  words: Word[] = []
  swiperConfig: SwiperOptions = {
    autoHeight: true,
    spaceBetween: 20,
    slidesPerView: 1,
    centeredSlides: true,
  }

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
