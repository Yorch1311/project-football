import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TournamentCategories } from './type';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = 'https://api-deportivo-uas.herokuapp.com/api/tournament/';

  //Función para recibir los detalles del torneo
  getTournamentData(id: any): Observable<TournamentCategories> {
    return this.http.get<TournamentCategories>(this.url+id);
  }

  //Obtener todos los torneos
  /*getTournaments(): Observable<Tournament> {
    return this.http.post<Tournament>(this.url+"getTournaments", {});
  }*/
}
