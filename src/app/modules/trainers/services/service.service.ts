import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TournamentCategories } from './type';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = 'https://deportivos-football-uas-api.herokuapp.com/';

  getTournamentCategories(id: any): Observable<TournamentCategories> {
    return this.http.get<TournamentCategories>(this.url+'coach/tournament/'+ id + '/mixed-categories');
  }

  //Obtener todos los torneos
  /*getTournaments(): Observable<Tournament> {
    return this.http.post<Tournament>(this.url+"getTournaments", {});
  }*/
}
