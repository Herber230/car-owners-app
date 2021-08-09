import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Automovil } from '../models/Automovil';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.carOwnersApi;

@Injectable({
  providedIn: 'root'
})
export class AutomovilService {

  constructor(private httpClient: HttpClient) {

  }

  listarAutomoviles() : Observable<Array<Automovil>> {
    const url = `${BASE_URL}/api/automovil`;
    return this.httpClient.get<Array<Automovil>>(url);
  }

  obtenerUnAutomovil(id: string | number) : Observable<Automovil> {
    const url = `${BASE_URL}/api/automovil/${id}`;
    return this.httpClient.get<Automovil>(url);
  }
  
  crearAutomovil(automovil: Automovil) : Observable<Automovil> {
    const url = `${BASE_URL}/api/automovil`;
    return this.httpClient.post<Automovil>(url, automovil);
  }

  actualizarAutomovil(automovil: Automovil) : Observable<Automovil> {
    const url = `${BASE_URL}/api/automovil`;
    return this.httpClient.put<Automovil>(url, automovil);
  }

  guardarAutomovil(automovil: Automovil) : Observable<Automovil> {
    if (automovil.id)
      return this.actualizarAutomovil(automovil);
    else 
      return this.crearAutomovil(automovil);
  }
}
