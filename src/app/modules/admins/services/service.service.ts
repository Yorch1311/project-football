import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TournamentDetail } from './type';

interface tupla {
  name: string;
  category: number;
  branch: number[];
  type: number;
  town: number;
  places: number[];
  dates: string;
  time: string;
  administrators: number[];
  referees: number[];
  coaches: number[];
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = 'https://api-deportivo-uas.herokuapp.com/api/tournament/';

  //metodo para obtener datos a mostrar en selects
  ObtenerData(): Observable<any> {
    return this.http.get(`${this.url}getNew`);
  }

  //metodo para introducir un nuevo torneo
  createTournamet(dato: tupla):Observable<any>{
    //console.log(dato);
    return this.http.put(`${this.url}create`,dato);
  }

  //Función para recibir los detalles del torneo
  Searchid(id: any): Observable<any> {
    return this.http.get(`${this.url}searchid/${id}`);
  }

  //Función para recibir los detalles del torneo
  getTournamentData(id: any): Observable<TournamentDetail> {
    //return this.http.get<TournamentDetail>(this.url+id);
    return this.http.get<TournamentDetail>(this.url+id);
  }

  activeTournament(id: any){
    const body = {
      id: id.toString()
    };
    return this.http.post(this.url+'detail', { params: body});
  }

  //Obtener todos los torneos
  /*getTournaments(): Observable<Tournament> {
    return this.http.post<Tournament>(this.url+"getTournaments", {});
  }*/
}
