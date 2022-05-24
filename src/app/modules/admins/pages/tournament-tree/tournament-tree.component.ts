import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogSaveComponent } from 'src/app/shared/components/dialog-save/dialog-save.component';
import { ServiceService } from '../../services/service.service';
import { MatchTournament, Team, TournamentMatch } from '../../services/type';


@Component({
  selector: 'app-tournament-tree',
  templateUrl: './tournament-tree.component.html',
  styleUrls: ['./tournament-tree.component.scss']
})
export class TournamentTreeComponent implements OnInit {

  data: Team[] = [];
  teamList: Team[] = [];
  teamToPlay: TournamentMatch | undefined;
  currentPhase: string = "";

  idTournament: string | null = "";
  idCategory: string | null = "";
  showButton: boolean = true;

  constructor(private service: ServiceService, private _router: ActivatedRoute) {

    this.idTournament = this._router.snapshot.paramMap.get("tournament");
    this.idCategory = this._router.snapshot.paramMap.get("id");


    this.service.getTeams( String(this.idTournament), String(this.idCategory)).subscribe(team =>{
      this.data = team;
    })

    this.service.getMatch(String(this.idTournament), String(this.idCategory)).subscribe(match =>{
      this.teamToPlay = match;

      if(this.teamToPlay != undefined){
        this.showButton = false;
      }else{
        this.showButton = true;
      }
    })
  }

  getList(data: Team[]){
    this.teamList = data

    //console.log(this.data)
  }

  sendTeam(){
    const teamIds: string[] = this.teamList.map((item) => item._id);
    //console.log({ teamsIds: teamIds})
    this.service.sendTeams( String(this.idTournament), String(this.idCategory), teamIds).subscribe(team =>{
      this.showButton = false
    })
  }

  ngOnInit(): void {
    console.log(this.data)
  }

}
