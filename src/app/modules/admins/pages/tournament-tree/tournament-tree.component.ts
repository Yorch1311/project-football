import { Component, OnInit } from '@angular/core';
import { DialogSaveComponent } from 'src/app/shared/components/dialog-save/dialog-save.component';
import { ServiceService } from '../../services/service.service';


@Component({
  selector: 'app-tournament-tree',
  templateUrl: './tournament-tree.component.html',
  styleUrls: ['./tournament-tree.component.scss']
})
export class TournamentTreeComponent implements OnInit {

  data:  {id: string, name: string }[] =  [{id:"123", name:"Chivas"},{id:"123", name:"Chivas"},{id:"123", name:"Chivas"},{id:"123", name:"Chivas"}] ;

  constructor(/*private service: ServiceService*/) {
    /*this.service.getTeam().subscribe(team =>{
      this.data = team;
    })*/
  }

  ngOnInit(): void {
  }
}
