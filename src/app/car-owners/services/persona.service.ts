import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/Persona';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.carOwnersApi;
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient: HttpClient) {

  }

  listarPersonas() : Observable<Array<Persona>> {
    const url = `${BASE_URL}/api/persona`;
    return this.httpClient.get<Array<Persona>>(url);
  }

  obtenerUnaPersona(id: string | number) : Observable<Persona> {
    const url = `${BASE_URL}/api/persona/${id}`;
    return this.httpClient.get<Persona>(url);
  }
  
  crearPersona(persona: Persona) : Observable<Persona> {
    const url = `${BASE_URL}/api/persona`;
    return this.httpClient.post<Persona>(url, persona);
  }

  actualizarPersona(persona: Persona) : Observable<Persona> {
    const url = `${BASE_URL}/api/persona`;
    return this.httpClient.put<Persona>(url, persona);
  }

  guardarPersona(persona: Persona) : Observable<Persona> {
    if (persona.id)
      return this.actualizarPersona(persona);
    else 
      return this.crearPersona(persona);
  }


}
