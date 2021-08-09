import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Automovil } from '../models/Automovil';
import { Persona } from '../models/Persona';
import { AutomovilService } from '../services/automovil.service';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-car-single-view',
  templateUrl: './car-single-view.component.html',
  styleUrls: ['./car-single-view.component.scss']
})
export class CarSingleViewComponent implements OnInit {

  //#region Properties

  idCar: number | string = '';
  carForm: FormGroup;
  personas: Array<Persona>;

  //#endregion

  //#region Methods

  constructor(
    private automovilService: AutomovilService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private personaService: PersonaService,
  ) {
    this.carForm = new FormGroup({
      marca: new FormControl('', [Validators.required]),
      linea: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      puertas: new FormControl('', [Validators.required]),
      propietario: new FormControl('', [Validators.required]),
    });

    this.personas = new Array<Persona>();
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.idCar = params.id;
        this.load();
      },
    });
  }

  load() {
    if (this.idCar != 'new') {
      this.automovilService.obtenerUnAutomovil(this.idCar).subscribe({
        next: (result) => {
          this.fillForm(result);
        },
      });
    }

    this.personaService.listarPersonas().subscribe({
      next: result => {
        this.personas = result;
      }
    })
  }

  private fillForm(car: Automovil): void {
    this.carForm.get('marca')?.setValue(car.marca);
    this.carForm.get('linea')?.setValue(car.linea);
    this.carForm.get('modelo')?.setValue(car.modelo);
    this.carForm.get('color')?.setValue(car.color);
    this.carForm.get('puertas')?.setValue(car.puertas);
    this.carForm.get('propietario')?.setValue(car.idPersonaPropietaria);
  }

  private extractAutomovil(): Automovil {
    const id: number | undefined =
      this.idCar && this.idCar != 'new'
        ? parseInt(this.idCar as any)
        : undefined;

    const car: Automovil = {
      id,
      marca: this.carForm.get('marca')?.value,
      modelo: this.carForm.get('modelo')?.value,
      linea: this.carForm.get('linea')?.value,
      color: this.carForm.get('color')?.value,
      puertas: this.carForm.get('puertas')?.value,
      idPersonaPropietaria: this.carForm.get('propietario')?.value,
    };

    return car;
  }

  onSubmit() : void {
    const automovil = this.extractAutomovil();
    this.automovilService.guardarAutomovil(automovil).subscribe({
      next: () => {
        this.router.navigate(['car-owners', 'automoviles']);
      }
    })    
  }

  //#endregion

  //#region Accessors
  //#endregion





}
