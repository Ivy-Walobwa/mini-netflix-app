import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styles: [`
  h3{
    color: white;
    text-align: left;
  }
  .title{
    color: rgba(255, 255, 255, 0.8);
  }
  small{
    color: rgba(255, 255, 255, 0.4);
  }
  `]
})

export class CarouselHolderComponent {

  @Input() movies: any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

}
