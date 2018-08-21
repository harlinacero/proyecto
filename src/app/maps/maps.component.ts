import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Marker } from '../shared/interfaces/maps';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
// just an interface for type safety.


export class MapsComponent implements OnInit {
  title = 'Módulo de mapas';
  lat = 4.658158;
  lng = -74.060361;
  zoom = 16;
  markers: Marker[];
  mensaje: string;
  constructor() {

    this.markers = [
      {
        lat: 4.658242,
        lng: -74.060361,
        label: 'A',
        draggable: true
      },
      {
        lat: 4.652323,
        lng: -74.060361,
        label: 'B',
        draggable: false
      },
      {
        lat: 4.651515,
        lng: -74.060361,
        label: 'C',
        draggable: true
      }
    ];
  }

  ngOnInit() {
  }

  clickedMarker(lat: number, lng: number) {
    this.mensaje = 'Click en \nlat:' + lat + 'y \nlgn: ' + lng;
    // console.log('Click en lat:' + lat + 'y lgn: ' + lng);
  }

  // mapClicked($event: MouseEvent) {
  //   this.markers.push({
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: true
  //   });
  // }

  // markerDragEnd(m: Marker, $event: MouseEvent) {
  //   console.log('dragEnd', m, $event);
  // }
}


