import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import {SwiperOptions} from "swiper";
import { register } from 'swiper/element/bundle'

@Directive({
  selector: '[SwiperElement]',
  standalone: true,
})
export class SwiperElementDirective implements AfterViewInit{
  @Input() config?: SwiperOptions;

  private readonly swiperElement: HTMLElement;

  constructor(private el: ElementRef<HTMLElement>) {
    register()
    this.swiperElement = el.nativeElement;
  }

  ngAfterViewInit(): void {
    Object.assign(this.el.nativeElement, this.config);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.el.nativeElement.initialize();
  }
}
