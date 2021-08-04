import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../models/Persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  owners : Array<Persona> = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'edad'];

  constructor(private personaService: PersonaService, private router:Router) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.personaService.listarPersonas().subscribe({
      next: results => {
        console.log('Una iteracion completada');
        this.owners = results;
      },
      complete: () => {
        console.log('El flujo de interacione se completo');
      },
      error: e => {
        console.log('Se genero un error en el flujo de iteraciones', e);
      }
    })
  }

  onSelect(persona: Persona) {
    this.router.navigate(['owners', persona.id])
  }

}
