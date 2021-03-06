import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Presente } from '../models/presente.model';

@Injectable({
  providedIn: 'root'
})
export class PresenteService {

  apiUrl = 'https://539e3dee1454.ngrok.io'


  constructor(private http: HttpClient) { }

   getAll(): Observable<Array<Presente>>{
     return this.http.get<Array<Presente>>(`${this.apiUrl}/api/presente`)
   }

   getbyCategoria(id: number): Observable<Array<Presente>>{
    return this.http.get<Array<Presente>>(`${this.apiUrl}/api/presente/categoria/${id}`);
  }

  }
