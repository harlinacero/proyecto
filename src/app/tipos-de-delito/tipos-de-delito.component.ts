import { Component, OnInit } from '@angular/core';
import { TiposDeDelitosService } from '../tipos-de-delitos.service';

@Component({
  selector: 'app-tipos-de-delito',
  templateUrl: './tipos-de-delito.component.html',
  styleUrls: ['./tipos-de-delito.component.css']
})
export class TiposDeDelitoComponent implements OnInit {
  tiposdedelitos: any;

  constructor(private _service: TiposDeDelitosService) { }

  ngOnInit() {
    this._service.getAllDelitos().subscribe(data => this.tiposdedelitos = data);
  }

}
