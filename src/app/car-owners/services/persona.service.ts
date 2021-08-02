import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/Persona';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000';

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

  obtenerUnaPersona(id: string) : Observable<Persona> {
    const url = `${BASE_URL}/api/persona/${id}`;
    return this.httpClient.get<Persona>(url);
  }
  
}
