import { Component, OnInit } from '@angular/core';
import { Torneo } from 'src/app/modules/admins/pages/tournament-show/tournament-show.component';

const ELEMENT_DATA: Torneo[] = [
  {id:'1', name: 'Champions League', type: "Fase de Grupos", category: "Juvenil A", place:"C. Dep.", date : "23-05-2022", status:"in-process"},
  {id:"3", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil C", place:"C. Dep.", date : "23-05-2022", status:"in-process"},
  {id:"5", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil F", place:"C. Dep.", date : "23-05-2022", status:"in-process"},
  {id:"6", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil G", place:"C. Dep.", date : "23-05-2022", status:"in-process"},
  {id:"7", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil H", place:"C. Dep.", date : "23-05-2022", status:"in-process"},
  {id:"8", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil I", place:"C. Dep.", date : "23-05-2022", status:"in-process"},
  {id:"9", name: 'Champions League', type: "Fase de Grupos", category: "Juvenil K", place:"C. Dep.", date : "23-05-2022", status:"in-process"},
];

@Component({
  selector: 'app-trainer-tournament-detail-page-component',
  templateUrl: './trainer-tournament-detail-page-component.component.html',
  styleUrls: ['./trainer-tournament-detail-page-component.component.scss']
})



export class TrainerTournamentDetailPageComponentComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
