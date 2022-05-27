import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match, matchHistory, TournamentCategories, TournamentMatch } from './type';
import { Tournament,  } from './type';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = 'https://deportivos-football-uas-api.herokuapp.com/';

  //metodo para obtener datos a mostrar en selects
  ObtenerData(): Observable<any> {
    return this.http.get(`${this.url}admin/tournament/fieldset-data/all`);
  }

  getTournamentCategories(id: any): Observable<TournamentCategories> {
    return this.http.get<TournamentCategories>(this.url+'coach/tournament/'+ id + '/mixed-categories');
  }

  //Obtener todos los torneos
  getTournaments(): Observable<Tournament[]> {
    return this.http.post<Tournament[]>(this.url + "coach/tournaments", {});
  }

  //Obtener Filtro de torneos por Tipos
  filterTournamentsByType(id : String): Observable<Tournament[]> {
    return this.http.post<Tournament[]>(this.url + "coach/tournaments", {"_id":id});
  }

  //Obter Filtro de Torneos por Fecha
  orderTournamentsByDate(order : String): Observable<Tournament[]> {
    return this.http.post<Tournament[]>(this.url + "coach/tournaments", {"order":order});
  }

  //Buscar torneo por nombre
  searchTournament( name : String): Observable<Tournament[]> {
    return this.http.post<Tournament[]>(this.url + "coach/tournaments", {"name":name});
  }


  getMatchHistory(idTournament: string, idCategory:string): Observable<TournamentMatch>{
    return this.http.get<TournamentMatch>(this.url+"admin/tournament/"+idTournament+"/category/"+idCategory+"/matches");
  }

  saveGoals(goles: {}, idTournament: string, idCategory: string): Observable<any>{
    return  this.http.put(this.url + "coach/tournament/"+idTournament+"/category/"+idCategory+"/scores", goles);
  }

  getMatchData(idTournament: string, idCategory: string, teamsIds: {}): Observable<Match[][]>{
    return this.http.post<Match[][]>(this.url+"coach/tournament/"+idTournament+"/category/"+idCategory+"/get-match", teamsIds)
  }

  endMatch(idTournament: string, idCategory: string, match: {}): Observable<any>{
    return this.http.put<any>(this.url+"coach/tournament/"+idTournament+"/category/"+idCategory+"/match-status", match)
  }
}

