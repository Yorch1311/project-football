import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TournamentCategories } from './type';
import { Tournament,  } from './type';
import { team } from './type';

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

  //agregar un equipo  
  createTeam(dato: team, id_t: string ):Observable<any>{
    //console.log(dato);
    return this.http.post(`${this.url}coach/tournament/${id_t}/team `,dato);    
  }

}

