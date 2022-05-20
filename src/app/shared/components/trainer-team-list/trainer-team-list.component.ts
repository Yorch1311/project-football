import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-team-list',
  templateUrl: './trainer-team-list.component.html',
  styleUrls: ['./trainer-team-list.component.scss']
})
export class TrainerTeamListComponent implements OnInit {

  availableTeams: {teamName: string}[] = [{teamName: 'America'},{teamName: 'Chivas'},{teamName: 'Rayados'},{teamName: 'Tigres'}]
  constructor() { }

  ngOnInit(): void {
  }

}
