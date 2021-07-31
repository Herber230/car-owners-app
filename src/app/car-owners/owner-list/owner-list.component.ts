import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Persona } from '../models/Persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit, AfterViewInit {

  owners : Array<Persona> = [];

  constructor(private personaService: PersonaService, private router:Router) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.personaService.listarPersonas().subscribe({
      next: results => {
        console.log('Una iteracion completada');
        this.owners = results;
        this.dataSource = new MatTableDataSource(results);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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

  displayedColumns: string[] = ['nombre', 'apellido', 'edad'];
  dataSource: MatTableDataSource<Persona>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
