import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

// import contacto 
import { MessageService } from '../../services/message.service';
import { AotSummaryResolver } from '@angular/compiler';

//AOS init scroll
import * as AOS from 'aos';

//loading
import { UtilsService } from '../../services/utils.service'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // form contacto 
  formContacto: FormGroup;
  private validCorreo = /\S+@\S+\.\S+/;

  // tema 
  temaAlmacenado: string = localStorage.getItem('color-tema');

  constructor(
    private formBuilder: FormBuilder,
    public _MessageService: MessageService,
    private _utilService: UtilsService,
  ) {
    this.formContacto = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.email, Validators.pattern(this.validCorreo)]],
      numero: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    AOS.init();
  }

  escogerTema() {
    if (this.temaAlmacenado === 'tema-dark') {
      localStorage.setItem('color-tema', 'tema-light');
      this.temaAlmacenado = localStorage.getItem('color-tema');
    } else {
      localStorage.setItem('color-tema', 'tema-dark');
      this.temaAlmacenado = localStorage.getItem('color-tema');
    }
  }


  enviarMensaje() {
    this._utilService.cargando = true;
    if (this.formContacto.value.nombre != "" && this.formContacto.value.correo != "" && this.formContacto.value.numero != "" && this.formContacto.value.mensaje != "") {
      this._MessageService.sendMessage(this.formContacto.value).subscribe(
        res => {
          Swal.fire({
            icon: 'success',
            title: 'Enviado',
            text: 'Tu mensaje se envió correctamente'
          }).then(
            function (value) {
              location.reload();
            }
          );
          this.formContacto.reset();
          this._utilService.cargando = false;
        },
        err => {
          console.log(err);
        }
      );

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Verifique los campos',
        text: 'Favor de ingresar todos los campos',
        timer: 1500
      });
      this._utilService.cargando = false;
    }
  }
}


