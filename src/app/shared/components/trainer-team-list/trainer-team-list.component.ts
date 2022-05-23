import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-team-list',
  templateUrl: './trainer-team-list.component.html',
  styleUrls: ['./trainer-team-list.component.scss']
})
export class TrainerTeamListComponent implements OnInit {

  @Input() teamList: {
    _id: string,
    name: string,
    teamLogo: string
  }[] = [];

  availableTeams: { teamName: string }[] = [{ teamName: 'America' }, { teamName: 'Chivas' }, { teamName: 'Rayados' }, { teamName: 'Tigres' }]
  constructor() { }

  ngOnInit(): void {
  }

}
