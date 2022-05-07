import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../model/formateur.model';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {


  constructor(private http: HttpClient) {
  }

  public getFormateurs() {
      return this.http.get<Formateur[]>('http://localhost:8080/formateurs')
  }
}
