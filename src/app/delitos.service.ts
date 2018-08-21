import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DelitosService implements OnInit {
  delitos: any;

  constructor(private _service: HttpClient) { }

  ngOnInit() {
  }

  getAllDelitos() {
    return this._service.get('https://callessindelincuencia.herokuapp.com/delitos.json');
  }
}

