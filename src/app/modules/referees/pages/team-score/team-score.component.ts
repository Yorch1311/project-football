import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { Match, TournamentMatch } from '../../services/type';

@Component({
  selector: 'app-team-score',
  templateUrl: './team-score.component.html',
  styleUrls: ['./team-score.component.scss']
})
export class TeamScoreComponent implements OnInit {

  tournament: string | null;
  category: string | null;
  id_partido: string | null;

  partido: any | undefined;
  idTeams: string[] = [];
  partido_name: string = "";

  //goles
  team1gol: number = 0;
  team2gol: number = 0;

  constructor(private service: ServiceService , private _router: ActivatedRoute, private router: Router) {
    this.tournament = this._router.snapshot.paramMap.get('id');
    this.category = this._router.snapshot.paramMap.get('id_category');
    this.id_partido = this._router.snapshot.paramMap.get('id_partido');

    /*this.service.getMatch(String(this.tournament), String(this.category), String(this.id_partido)).subscribe(match => {
      this.partido = match;
      this.partido_name = this.partido._id;*/

      /*const current = this.partido.currentStage;

      if(current == 'top16'){
        const pair = this.partido.top16.matches.filter(match => match[0]._id == this.idTeams[0] && match[1]._id == this.idTeams[1])
        this.team1gol = pair[0][0].goals
        this.team2gol = pair[0][1].goals

      }else if(current == 'quarterFinal'){
        const pair = this.partido.quarterFinal.matches.filter(match => match[0]._id == this.idTeams[0] && match[1]._id == this.idTeams[1])
        this.team1gol = pair[0][0].goals
        this.team2gol = pair[0][1].goals

      }else if(current == 'semiFinal'){
        const pair = this.partido.semiFinal.matches.filter(match => match[0]._id == this.idTeams[0] && match[1]._id == this.idTeams[1])
        this.team1gol = pair[0][0].goals
        this.team2gol = pair[0][1].goals

      }else if(current == 'final'){
        const pair = this.partido.final.matches.filter(match => match[0]._id == this.idTeams[0] && match[1]._id == this.idTeams[1])
        this.team1gol = pair[0][0].goals
        this.team2gol = pair[0][1].goals

      }*/
    //})

    if(this.tournament !== null && this.category !== null && this.id_partido != null){
      this.idTeams = this.id_partido?.split('-');

      const teamsIds = {
        "teamsIds": [ this.idTeams[0], this.idTeams[1]]
      }

      this.service.getMatchData(this.tournament, this.category, teamsIds).subscribe(data => {
        this.partido = data;
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
      tournamentId: this.tournament,
      categoryId: this.category,
      teams: [
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
    this.service.saveGoals(goles, String(this.tournament), String(this.category), String(this.id_partido)).subscribe(resul => {

    })
  }

}
