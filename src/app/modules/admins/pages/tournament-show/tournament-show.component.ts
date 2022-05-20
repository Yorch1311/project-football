import { Component, OnInit } from '@angular/core';
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
  {id:'1', name: 'Champions League', type: "Fase de Grupos", category: "Juvenil A", place:"C. Dep.", date : "23-05-2022", status:"Activo"},   
  {id:"2", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil B", place:"C. Dep.", date : "23-05-2022", status:"Terminado"},
  {id:"3", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil C", place:"C. Dep.", date : "23-05-2022", status:"Activo"},
  {id:"4", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil D", place:"C. Dep.", date : "23-05-2022", status:"Terminado"},
  {id:"5", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil F", place:"C. Dep.", date : "23-05-2022", status:"Activo"},  
  {id:"6", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil G", place:"C. Dep.", date : "23-05-2022", status:"Activo"},  
  {id:"7", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil H", place:"C. Dep.", date : "23-05-2022", status:"Activo"},  
  {id:"8", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil I", place:"C. Dep.", date : "23-05-2022", status:"Activo"},  
  {id:"9", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil J", place:"C. Dep.", date : "23-05-2022", status:"Terminado"},  
  {id:"9", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil K", place:"C. Dep.", date : "23-05-2022", status:"Activo"},
];

@Component({
  selector: 'app-tournament-show',
  templateUrl: './tournament-show.component.html',
  styleUrls: ['./tournament-show.component.scss']
})
export class TournamentShowComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

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

  tournamentDetail(id: string) {  
    this.router.navigate(["admin/tournament/detail/" + id + ""]);
  }

}
