import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team, Tournament, TournamentDetail, MatchTournament, TournamentMatch } from './type';
import { tupla } from './type'
import { environment } from 'src/environments/environment';

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

  getTeams(idTournament: String, idCategory: String): Observable<Team[]> {
    return this.http.get<Team[]>(environment.apiUrl+'coach/tournament/'+idTournament+'/category/'+idCategory+'/teams')
  }

  sendTeams(idTournament: String, idCategory: String, teamsIds: string[]){
    return this.http.post(`${this.url}admin/tournament/${idTournament}/category/${idCategory}/matches`,{ teamsIds: teamsIds})
  }

  getMatch(idTournament: string, idCategory: string): Observable<TournamentMatch>{
    return this.http.get<TournamentMatch>(`${this.url}admin/tournament/${idTournament}/category/${idCategory}/matches`)
  }

  ObtenerPlaces(id_city: String):Observable<any>{
    return this.http.get(`${this.url}admin/tournament/fieldset-data/places/${id_city}`);
  }

  //metodo para introducir un nuevo torneo
  createTournament(dato: tupla):Observable<any>{
    //console.log(dato);
    return this.http.post(`${this.url}admin/tournament`,dato);
  }

  //Función para recibir los detalles del torneo
  Searchid(id: any):Observable<any> {
    return this.http.get(`${this.url}admin/tournament/${id}`);
  }

  updateTournament(dato: tupla, _id: string):Observable<any>{
    //console.log(dato);
    return this.http.put(`${this.url}admin/tournament/${_id}`,dato);
  }



  //Función para recibir los detalles del torneo
  getTournamentData(id: any): Observable<TournamentDetail> {
    //return this.http.get<TournamentDetail>(this.url+id);
    return this.http.get<TournamentDetail>(this.url+'admin/tournament/'+ id);
  }

  activeTournament(id: any){
    const body = {
      id: id.toString()
    };
    return this.http.post(this.url+'detail', { params: body});
  }

  //Obtener todos los torneos
  getTournaments(): Observable<Tournament[]> {
    return this.http.post<Tournament[]>(this.url + "admin/tournaments", {});
  }

  //Obtener Filtro de torneos por Tipos
  filterTournamentsByType(id : String): Observable<Tournament[]> {
    return this.http.post<Tournament[]>(this.url + "admin/tournaments", {"_id":id});
  }

  //Obter Filtro de Torneos por Fecha
  orderTournamentsByDate(order : String): Observable<Tournament[]> {
    return this.http.post<Tournament[]>(this.url + "admin/tournaments", {"order":order});
  }

  //Buscar torneo por nombre
  searchTournament( name : String): Observable<Tournament[]> {
    return this.http.post<Tournament[]>(this.url + "admin/tournaments", {"name":name});
  }


}
