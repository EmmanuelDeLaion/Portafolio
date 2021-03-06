import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

//AOS init scroll
import * as AOS from 'aos';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myStyleP: object = {};
  myParamsP: object = {};
  widthP: number = 100;
  heightP: number = 100;

  constructor() { 
    AOS.init();
  }

  ngOnInit(): void {
    // particulas fixed acerca de mi 
    this.myStyleP = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };
    this.myParamsP = {
      particles: {
        number: {
          value: 50,
        },
        color: {
          value: '#A758AE'
        },
        shape: {
          type: 'circle',
        },
      }
    };



  }


  // particulas home 
  width: number = 50;
  height: number = 100;
  myStyle: Object = {
    'position': 'absolute',
    'width': '100%',
    'height': '100%',
    'z-index': 0,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
  };
  myParams: object = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#12242B"
      },
      "shape": {
        "type": "circle",
        "polygon": {
          "nb_sides": 7
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#A758AE",
        "opacity": .3,
        "width": 1.5
      },
      // "move": {
      //   "enable": true,
      //   "speed": 4,
      //   "direction": "none",
      //   "random": false,
      //   "straight": false,
      //   "out_mode": "out",
      //   "bounce": false,
      //   "attract": {
      //     "enable": false,
      //     "rotateX": 600,
      //     "rotateY": 1200
      //   }
      // }
    },
    "retina_detect": true
  };

}
