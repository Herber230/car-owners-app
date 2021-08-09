import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Automovil } from '../models/Automovil';
import { AutomovilService } from '../services/automovil.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars : Array<Automovil> = [];

  constructor(private automovilService: AutomovilService, private router:Router) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.automovilService.listarAutomoviles().subscribe({
      next: results => {
        this.cars = results;
      },
      complete: () => {
      },
      error: e => {
        console.log('Se genero un error en el flujo de iteraciones', e);
      }
    })
  }

  new() {
    this.router.navigate(['car-owners', 'automoviles', 'new'])
  }

  onSelect(car: Automovil) {
    this.router.navigate(['car-owners', 'automoviles', car.id])
  }

}
