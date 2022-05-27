import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { Match } from '../../services/type';

@Component({
  selector: 'app-team-score',
  templateUrl: './team-score.component.html',
  styleUrls: ['./team-score.component.scss']
})
export class TeamScoreComponent implements OnInit {

  tournament: string | null;
  category: string | null;
  id_partido: string | null;

  partido: Match[][] | undefined;
  idTeams: string[] = [];
  partido_name: string = "";

  //goles
  team1gol: number = 0;
  team2gol: number = 0;

  constructor(private service: ServiceService , private _router: ActivatedRoute, private router: Router) {
    this.tournament = this._router.snapshot.paramMap.get('id');
    this.category = this._router.snapshot.paramMap.get('id_category');
    this.id_partido = this._router.snapshot.paramMap.get('id_partido');

    if(this.tournament !== null && this.category !== null && this.id_partido != null){
      this.idTeams = this.id_partido?.split('-');

      const teamsIds = {
        teamsIds: [ this.idTeams[0], this.idTeams[1]]
      }

      this.service.getMatchData(this.tournament, this.category, teamsIds).subscribe(data => {
        this.partido = data;
        this.team1gol = this.partido[0][0].goals;
        this.team2gol = this.partido[0][1].goals;

      })

    }
   }

  ngOnInit(): void {
  }


  anotarGol(id:number){
    if(id == 1){
      this.team1gol++;
    }else{
      this.team2gol++;
    }
  }

  register(){
    const goles = {
      "teams": [
        {
          _id: this.idTeams[0],
          goals: this.team1gol
        },
        {
          _id: this.idTeams[1],
          goals: this.team2gol
        }
      ]
    }
    this.service.saveGoals(goles, String(this.tournament), String(this.category)).subscribe(resul => {

    })
  }

  finish(){
    const teams = {
      "teamsIds": [this.idTeams[0], this.idTeams[1]]
    }
    this.service.endMatch(String(this.tournament), String(this.category), teams).subscribe(result =>{

    })
  }

}
