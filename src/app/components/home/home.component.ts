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
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formContacto: FormGroup;
  private validCorreo = /\S+@\S+\.\S+/;
 
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


