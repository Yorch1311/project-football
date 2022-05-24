import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogSaveComponent } from 'src/app/shared/components/dialog-save/dialog-save.component';
import { ServiceService } from '../../services/service.service';
import { teamList } from '../../services/type';


@Component({
  selector: 'app-tournament-tree',
  templateUrl: './tournament-tree.component.html',
  styleUrls: ['./tournament-tree.component.scss']
})
export class TournamentTreeComponent implements OnInit {

  data:  teamList[] =  [];
  idTournament: String | null = "";
  idCategory: String | null = "";

  constructor(private service: ServiceService, private _router: ActivatedRoute) {

    this.idTournament = this._router.snapshot.paramMap.get("tournament");
    this.idCategory = this._router.snapshot.paramMap.get("id");


    this.service.getTeams( String(this.idTournament), String(this.idCategory)).subscribe(team =>{
      this.data = team;
    })
  }

  ngOnInit(): void {
  }
  
}
