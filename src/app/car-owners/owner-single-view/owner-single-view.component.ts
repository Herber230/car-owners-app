import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../models/Persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-owner-single-view',
  templateUrl: './owner-single-view.component.html',
  styleUrls: ['./owner-single-view.component.scss'],
})
export class OwnerSingleViewComponent implements OnInit {
  //#region Properties

  idPersona: number | string = '';
  personaForm: FormGroup;

  //#endregion

  //#region Methods

  constructor(
    private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.personaForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
      user: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.idPersona = params.id;
        this.load();
      },
    });
  }

  onSubmit(): void {
    const persona = this.extractPersona();
    this.personaService.guardarPersona(persona).subscribe({next: () => {
      this.router.navigate(['/car-owners/personas']);
    }});
  }

  load() {
    if (this.idPersona != 'new') {
      this.personaService.obtenerUnaPersona(this.idPersona).subscribe({
        next: (result) => {
          this.fillForm(result);
        },
      });
    }
  }

  private fillForm(persona: Persona): void {
    this.personaForm.get('nombre')?.setValue(persona.nombre);
    this.personaForm.get('apellido')?.setValue(persona.apellido);
    this.personaForm.get('edad')?.setValue(persona.edad);
    this.personaForm.get('pass')?.setValue(persona.pass);
    this.personaForm.get('user')?.setValue(persona.user);
  }

  private extractPersona(): Persona {
    const id: number | undefined =
      this.idPersona && this.idPersona != 'new'
        ? parseInt(this.idPersona as any)
        : undefined;

    const persona: Persona = {
      id,
      nombre: this.personaForm.get('nombre')?.value,
      apellido: this.personaForm.get('apellido')?.value,
      edad: this.personaForm.get('edad')?.value,
      pass: this.personaForm.get('pass')?.value,
      user: this.personaForm.get('user')?.value,
    };

    return persona;
  }

  //#endregion

  //#region Accessors

  //#endregion
}
