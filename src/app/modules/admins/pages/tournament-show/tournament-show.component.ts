import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Filter, Item } from '../../services/type';

export interface Torneo {
  id: string;
  name: string;
  type: string;
  category: string;
  place: string;
  date : string;
  status : string;
}

const ELEMENT_DATA: Torneo[] = [
  {id:'1', name: 'Champions League', type: "Fase de Grupos", category: "Juvenil A", place:"C. Dep.", date : "23-05-2022", status:"in-process"},
  {id:"2", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil B", place:"C. Dep.", date : "23-05-2022", status:"done"},
  {id:"3", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil C", place:"C. Dep.", date : "23-05-2022", status:"in-process"},
  {id:"4", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil D", place:"C. Dep.", date : "23-05-2022", status:"done"},
  {id:"5", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil F", place:"C. Dep.", date : "23-05-2022", status:"in-process"},
  {id:"6", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil G", place:"C. Dep.", date : "23-05-2022", status:"in-process"},
  {id:"7", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil H", place:"C. Dep.", date : "23-05-2022", status:"in-process"},
  {id:"8", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil I", place:"C. Dep.", date : "23-05-2022", status:"in-process"},
  {id:"9", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil J", place:"C. Dep.", date : "23-05-2022", status:"done"},
  {id:"9", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil K", place:"C. Dep.", date : "23-05-2022", status:"in-process"},
];

@Component({
  selector: 'app-tournament-show',
  templateUrl: './tournament-show.component.html',
  styleUrls: ['./tournament-show.component.scss']
})
export class TournamentShowComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  NameData : String = "";
  filtro : Number = 0;
  ordenar : Number = 0;

  Order: Item[] = [
    {id:1, name: 'Fase de Grupos' },
    {id:2, name: 'Categoria' },
    {id:3, name: 'Lugar' },
    {id:4, name: 'Fecha' },
  ];

  Filter: Item[] = [
    { id:1, name: 'Mas Reciente' },
    { id:2, name: 'Mas Antiguo' }
  ];

  /*
  Element: Tournament[] = [
    {}
  ];
*/

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  tournamentCreate() {
    this.router.navigate(["/admin/tournament/create"]);
  }

  tournamentDetail(detail: { id: string, status: string }) {
    this.router.navigate(["admin/tournament/detail/" + detail.id + "/status/" + detail.status]);
  }


  onChangeName(data: String){
    this.NameData = data;
    console.log(data);
  }

  onChangeFiltro(id_filtro: Number){
    this.filtro = id_filtro;
    console.log(id_filtro);
    alert(id_filtro);
  }

  onChangeOrden(id_orden: Number){
    this.ordenar = id_orden;
    console.log(id_orden);
    alert(id_orden);
  }

}