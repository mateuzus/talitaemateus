import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Presenca, PresencaRequest } from '../models/Presenca.model';

@Injectable({
  providedIn: 'root'
})
export class PresencaService {

  apiUrl = 'https://539e3dee1454.ngrok.io'

  constructor(private http: HttpClient) { }

  confirmar(presencaRequest: PresencaRequest): Observable<Presenca>{
   return this.http.post<Presenca>(`${ this.apiUrl }/api/presenca`, presencaRequest)


  }
}
