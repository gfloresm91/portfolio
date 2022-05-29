import { Component, OnInit } from '@angular/core';

interface MenuItem {
  route: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  routes: MenuItem[] = [{ route: '/about', name: 'Acerca' }];

  // @ViewChildren(RouterLinkActive, { read: ElementRef })
  // linkRefs!: QueryList<ElementRef>;
  // activeClass = 'active';

  constructor() {}

  ngOnInit(): void {}

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     const navigation = document.querySelector('#navigation');
  //     const slideLine = document.querySelector('#slide-line');
  //     const navItems = document.querySelectorAll('#navigation li');
  //     let currentItem = document.querySelector('#navigation .active');

  //     if (currentItem) {
  //       const width = currentItem.getBoundingClientRect().width;
  //       console.log(width);
  //     }
  //   }, 0);
  // }

  // Underline transition
  //  function initPosition() {
  //   if (currentItem) {
  //     const width = currentItem.getBoundingClientRect().width;
  //     const left = currentItem.offsetLeft;

  //     //console.log(`${width}px`);
  //     //console.log(left);

  //     slideLine.style.width = `${width}px`;
  //     slideLine.style.left = `${left}px`;
  //   } else {
  //     slideLine.style.width = 0;
  //   }
  // }
}
