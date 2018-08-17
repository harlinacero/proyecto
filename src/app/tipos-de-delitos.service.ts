import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class TiposDeDelitosService implements OnInit {
  tiposdeDelitos: any;

  constructor(private _service: HttpClient) { }

  ngOnInit() {
  }

  getAllDelitos() {
    return this._service.get('https://callessindelincuencia.herokuapp.com/tiposdedelitos.json');
  }
}
