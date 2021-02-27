import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UtilsService {

    public cargando: Boolean = false;
    constructor() {

     }

    public set _cargando(cargando) {
        this.cargando = cargando;
    }
    public get _cargando() {
        return this.cargando;
    }


}