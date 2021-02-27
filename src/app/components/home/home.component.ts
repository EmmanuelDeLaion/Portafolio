import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

// import contacto 
import { MessageService } from '../../services/message.service';
import { AotSummaryResolver } from '@angular/compiler';

//AOS init scroll
import * as AOS from 'aos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formContacto: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public _MessageService: MessageService,
  ) {
    this.formContacto = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.email]],
      numero: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    AOS.init();
  }


  enviarMensaje() {
    // this._utilService.loading = true;

    console.log(this.formContacto.value);
    this._MessageService.sendMessage(this.formContacto.value).subscribe(res => {
      console.log(res);
      if (this.formContacto.value.nombre != "" && this.formContacto.value.correo != "" && this.formContacto.value.numero != "" && this.formContacto.value.mensaje != "") {
        Swal.fire({
          icon: 'success',
          title: 'Enviado',
          text: 'Tu mensaje se envió correctamente',
          timer: 1500
        });
        this.formContacto.reset();

      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Verifique los campos',
          text: 'Favor de ingresar todos los campos',
          timer: 1500
        });
      }
    },
      err => {
        console.log(err);

      }
    );



  }


}


