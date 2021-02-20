import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formContacto: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formContacto = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.email]],
      mensaje: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {


  }


  enviarMensaje() {
    console.log(this.formContacto.value);
    if (this.formContacto.value.nombre != "" && this.formContacto.value.correo != "" && this.formContacto.value.mensaje != "") {
      Swal.fire({
        icon: 'success',
        title: 'Tu mensaje se ha enviado correctamente'
      });
      this.formContacto.reset();
     }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Verifique los campos'
      });
    }

   
 
  }

 
}


