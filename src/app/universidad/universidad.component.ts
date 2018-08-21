import { Component, OnInit } from '@angular/core';
import { TiposDeDelitosService } from '../tipos-de-delitos.service';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.css']
})
export class UniversidadComponent implements OnInit {
  delitos: any;

  constructor(private _service: TiposDeDelitosService) { }

  ngOnInit() {
    this._service.getAllDelitos().subscribe(data => {
      this.delitos = data;
    });
  }

}
