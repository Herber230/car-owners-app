import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../models/Persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-owner-single-view',
  templateUrl: './owner-single-view.component.html',
  styleUrls: ['./owner-single-view.component.scss'],
})
export class OwnerSingleViewComponent implements OnInit {
  selectedPerson?: Persona;

  constructor(private personaService: PersonaService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: params => {
        this.load(params.id)
      }
    })
  }

  get nombre() {
    return this.selectedPerson ? this.selectedPerson.nombre : '';
  }

  load(id: string) {
    this.personaService.obtenerUnaPersona(id).subscribe({
      next: result => {
        this.selectedPerson = result;
      }
    })
  }

  get nombreCompleto() {
    return this.selectedPerson
      ? this.selectedPerson.nombre + ' ' + this.selectedPerson.apellido
      : '';
  }
}
