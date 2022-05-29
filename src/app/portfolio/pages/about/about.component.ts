import { Component, OnInit } from '@angular/core';
import * as Flickity from 'flickity';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      var elem = document.querySelector('.testimonials')!;
      var flkty = new Flickity(elem, {
        adaptiveHeight: true,
        wrapAround: true,
        cellSelector: '.testimonial-item',
        arrowShape: {
          x0: 10,
          x1: 60,
          y1: 50,
          x2: 65,
          y2: 45,
          x3: 20,
        },
      });
    });
  }
}
