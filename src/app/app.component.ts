import { Component, OnInit } from '@angular/core';
import { UtilsService } from './services/utils.service'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 
  constructor(
    public _utilService: UtilsService
  ){

  }
  ngOnInit() {

  }
  
}
