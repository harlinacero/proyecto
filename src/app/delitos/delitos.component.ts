import { Component, OnInit } from '@angular/core';
import { DelitosService } from '../delitos.service';

@Component({
  selector: 'app-delitos',
  templateUrl: './delitos.component.html',
  styleUrls: ['./delitos.component.css']
})
export class DelitosComponent implements OnInit {
  delitos: any;

  constructor(private _service: DelitosService) { }

  ngOnInit() {
    this._service.getAllDelitos().subscribe(data => {
      this.delitos = data;
    });
  }

}
