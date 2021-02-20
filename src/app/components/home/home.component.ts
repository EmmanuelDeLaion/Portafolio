import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }


  enviarMensaje() {
    Swal.fire({
      title: 'Mensaje enviado',
      text: 'Su mensaje se envió correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      timer: 1500
    })
  }




}
