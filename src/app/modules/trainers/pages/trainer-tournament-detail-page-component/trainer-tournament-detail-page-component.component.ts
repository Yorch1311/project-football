import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Filter, Item, Tournament } from '../../services/type';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-trainer-tournament-detail-page-component',
  templateUrl: './trainer-tournament-detail-page-component.component.html',
  styleUrls: ['./trainer-tournament-detail-page-component.component.scss']
})

export class TrainerTournamentDetailPageComponentComponent implements OnInit {
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

  constructor( private router: Router, private APIcreate: ServiceService) {
  }

  ngOnInit(): void {

    this.APIcreate.getTournaments().subscribe(result => {
      this.data = result;
    })


    this.APIcreate.ObtenerData().subscribe(datos =>{
      this.Filter = datos['types'];
    })


  }

  tournamentDetail(detail: { id: string, status: string }) {
    this.router.navigate(["trainer/tournament/" + detail.id + "/categories"]);
  }


  onChangeName(data: String){
    this.NameData = data;
  }

  onChangeFiltro(id_filtro: String){
    this.filtro = id_filtro;
    //alert(id_filtro);
    /*this.APIcreate.filterTournamentsByType(this.filtro).subscribe(result => {
      console.log(result);
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
      console.log(result);
      this.data = result;
    })*/
  }

  onKeyUpFilter(data: String){
    this.NameData = data;

    /*
    this.APIcreate.searchTournament(this.NameData).subscribe(result => {
      console.log(result);
      this.data = result;
    })*/
  }

}
