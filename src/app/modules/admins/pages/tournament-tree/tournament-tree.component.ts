import { Component, OnInit } from '@angular/core';
import { MatSnackBar, _SnackBarContainer } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private service: ServiceService, private _router: ActivatedRoute, private _snackBar: MatSnackBar, private router: Router) {

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
  }

  sendTeam(){
    if(this.teamList.length == 2 ||  this.teamList.length == 4 || this.teamList.length == 8 || this.teamList.length == 16){
      const teamIds: string[] = this.teamList.map((item) => item._id);
      this.service.sendTeams( String(this.idTournament), String(this.idCategory), teamIds).subscribe(team =>{
        this.showButton = false
      })
    }else{
      this.showSnackbar("No cumple con los equipos suficientes","red")
    }

  }

  ngOnInit(): void {
  }

  showSnackbar(nombre: string, tipo: string){
    if(tipo == "red"){
      this._snackBar.open(nombre, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['red-snackbar'],
        duration: 3000,
      });

    }else if(tipo == "green"){

      this._snackBar.open(nombre, 'X', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['green-snackbar'],
        duration: 3000,
      });

    }
  }

  watchMatches(phase: string){
    this.router.navigate(['admin/tournament/'+this.idTournament+'/category/'+this.idCategory+'/match/'+phase])
  }
}
