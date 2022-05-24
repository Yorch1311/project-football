import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { partido } from '../../services/type';

@Component({
  selector: 'app-team-score',
  templateUrl: './team-score.component.html',
  styleUrls: ['./team-score.component.scss']
})
export class TeamScoreComponent implements OnInit {

  tournament: string | null;
  category: string | null;  
  id_partido: string | null;

  partido: partido | undefined;

  //variables para mostrar 
  name1: string = "";
  name2: string = "";
  path1: string = "";
  path2: string = "";

  //goles  
  team1gol: number = 0;
  team2gol: number = 0;

  constructor(private service: ServiceService , private _router: ActivatedRoute, private router: Router) {
    this.tournament = this._router.snapshot.paramMap.get('id');
    this.category = this._router.snapshot.paramMap.get('id_category');
    this.id_partido = this._router.snapshot.paramMap.get('id_partido');

    if(this.tournament !== null && this.category !== null){
      this.partido = {
        _id: this.tournament,
        id_category: this.category,
        team1: {
          _id: "string",
          name: "Testigos de yobani",
          teamLogo: "string",
        },
        team2: {
          _id: "string",
          name: "Reprobados mañana",
          teamLogo: "string",
        },
       }   
    }    
   }
      
  ngOnInit(): void {    
    if(this.partido !== undefined){
      this.name1 = this.partido.team1.name;
      this.name2 = this.partido.team2.name;
      this.path1 = this.partido.team1.teamLogo;
      this.path2 = this.partido.team2.teamLogo;
    }
    //Obtener  los dos partidos por su id
    //id, nombre e imagen nadamas     
  }


  anotarGol(id:number){
    if(id == 1){
      this.team1gol++;
    }else{
      this.team2gol++;
    }
  }

  Register(){
    //registrar los goles 
  }

}
