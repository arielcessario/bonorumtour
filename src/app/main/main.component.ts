import { Component, OnInit } from '@angular/core';
import * as slide from '../../assets/js/responsiveslides.min.js';

declare var $: any;


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mostrar = false;
  isCollapsed = true;
  constructor() {}

  ngOnInit() {
    $('#flexiselDemo1').flexisel({
      visibleItems: 4,
      animationSpeed: 1000,
      autoPlay: true,
      autoPlaySpeed: 3000,
      pauseOnHover: true,
      enableResponsiveBreakpoints: true,
      responsiveBreakpoints: {
        portrait: {
          changePoint: 480,
          visibleItems: 1
        },
        landscape: {
          changePoint: 640,
          visibleItems: 2
        },
        tablet: {
          changePoint: 768,
          visibleItems: 3
        }
      }
    });
  }

  emiteDefer() {
    this.mostrar = true;
  }
}
