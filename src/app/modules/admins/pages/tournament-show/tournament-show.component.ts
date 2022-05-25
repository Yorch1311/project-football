import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filter, Item, Tournament } from '../../services/type';
import { ServiceService } from '../../services/service.service';

export interface Torneo {
  id: string;
  name: string;
  type: string;
  category: string;
  place: string;
  date : string;
  status : string;
}


@Component({
  selector: 'app-tournament-show',
  templateUrl: './tournament-show.component.html',
  styleUrls: ['./tournament-show.component.scss']
})
export class TournamentShowComponent implements OnInit {

  NameData : String = "";
  filtro : String = "";
  ordenar : String = "";
  data : Tournament[] | undefined;  // Utilizar interfaz ara la api

  Filter : Item[] = [
    //{_id:"1", name: 'Fase de Grupos' },
    //{_id:"2", name: 'Eliminatoria' },
  ];

  Order : Item[] = [
    { _id:"1", name: 'Mas Reciente' },
    { _id:"2", name: 'Mas Antiguo' }
  ];


  constructor( private router: Router, private APIcreate: ServiceService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.APIcreate.getTournaments().subscribe(result => {
      this.data = result;
    })


    this.APIcreate.ObtenerData().subscribe(datos =>{
      this.Filter = datos['types'];
    })

  }

  tournamentCreate() {
    this.router.navigate(["/admin/tournament/create"]);
  }

  tournamentDetail(detail: { id: string, status: string }) {
    this.router.navigate(["admin/tournament/detail/" + detail.id + "/status/" + detail.status]);
  }


  onChangeName(data: String){
    this.NameData = data;
  }

  onChangeFiltro(id_filtro: String){
    this.filtro = id_filtro;
    //alert(id_filtro);
    /*this.APIcreate.filterTournamentsByType(this.filtro).subscribe(result => {
      this.data = result;
    })*/
  }

  onChangeOrden(id_orden: String){
    var typeOrder : String;
    this.ordenar = id_orden;

    if( this.ordenar == "1"){
      typeOrder = "ASC";
    }else{
      typeOrder = "DESC";
    }

    /*
    this.APIcreate.orderTournamentsByDate(typeOrder).subscribe(result => {
      this.data = result;
    })*/
  }

  onKeyUpFilter(data: String){
    this.NameData = data;

    /*
    this.APIcreate.searchTournament(this.NameData).subscribe(result => {
      this.data = result;
    })*/
  }

}
