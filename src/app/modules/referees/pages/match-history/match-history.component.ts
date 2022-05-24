import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { matches, MatchHistory } from '../../services/type';
import { matchHistory } from '../../services/type';


interface team {
  _id: string;
  name1:string;
  Logo1:string;
  name2: string;
  Logo2: string;
}




@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss'],
})
export class MatchHistoryComponent implements OnInit {
  
  history: MatchHistory | undefined;
  category: String | null;
  tournament: String | null;


  //los que sean historia del tipo donde no se le deve de permitir el click mientras los que sean del tipo in-progress
  historyTournament: matchHistory | any;
  //obtener el status id compuesto el name, el logo 
  Arrmatches: matches [] = [];
  Arrfinal: team [] = []; // 2 
  ArrSemi: team [] = [];  //  4
  ArrOctavos: team [] = []; //  8  

  constructor(
    private service: ServiceService, private _router: ActivatedRoute, private router: Router
  ) {

    this.history = {
      _id: 'asdasdasd465ad',
      _id_category: 'aaaaaaaaaaaaaasssssssssss---asssssssssssdasdasd',
      name: 'UASITOS 2022',
      actual_phase: 'cuartos',
      phases: [
        {
          name: 'Cuartos de final',
          _id: "cuartos",
          matchList: [
            {
              _id: '1',
              team1: { _id: 'string', name: 'string', teamLogo: 'string' },
              team2: { _id: 'string', name: 'string', teamLogo: 'string' },
            },
            {
              _id: '2',
              team1: { _id: 'string', name: 'string', teamLogo: 'string' },
              team2: { _id: 'string', name: 'string', teamLogo: 'string' },
            },
            {
              _id: '3',
              team1: { _id: 'string', name: 'string', teamLogo: 'string' },
              team2: { _id: 'string', name: 'string', teamLogo: 'string' },
            },
            {
              _id: '4',
              team1: { _id: 'string', name: 'string', teamLogo: 'string' },
              team2: { _id: 'string', name: 'string', teamLogo: 'string' },
            },
          ],
        },
        {
          name: 'Octavos de final',
          _id: "octavos",
          matchList: [
            {
              _id: '5',
              team1: { _id: 'string', name: 'string', teamLogo: 'string' },
              team2: { _id: 'string', name: 'string', teamLogo: 'string' }
            },
            {
              _id: '6',
              team1: { _id: 'string', name: 'string', teamLogo: 'string' },
              team2: { _id: 'string', name: 'string', teamLogo: 'string' }
            },
            {
              _id: '7',
              team1: { _id: 'string', name: 'string', teamLogo: 'string' },
              team2: { _id: 'string', name: 'string', teamLogo: 'string' }
            },
            {
              _id: '8',
              team1: { _id: 'string', name: 'string', teamLogo: 'string' },
              team2: { _id: 'string', name: 'string', teamLogo: 'string' }
            },
            {
              _id: '9',
              team1: { _id: 'string', name: 'string', teamLogo: 'string' },
              team2: { _id: 'string', name: 'string', teamLogo: 'string' }
            },
            {
              _id: '10',
              team1: { _id: 'string', name: 'string', teamLogo: 'string' },
              team2: { _id: 'string', name: 'string', teamLogo: 'string' }
            },
            {
              _id: '11',
              team1: { _id: 'string', name: 'string', teamLogo: 'string' },
              team2: { _id: 'string', name: 'string', teamLogo: 'string' }
            },
            {
              _id: '12',
              team1: { _id: 'string', name: 'string', teamLogo: 'string' },
              team2: { _id: 'string', name: 'string', teamLogo: 'string' }
            }
          ]
        },
      ],
    };

    this.tournament = this._router.snapshot.paramMap.get('id');
    this.category = this._router.snapshot.paramMap.get('id_category');

    console.log(this.tournament);
    console.log(this.category);       
  }

  ngOnInit(): void {
    

    this.service.getMatchHistory(String(this.tournament), String(this.category)).subscribe((history) => {
      this.historyTournament = history;                
      console.log(this.historyTournament); 
      
      if(this.historyTournament == null){
        alert("Error aun no se asignan equipos spara esta categoria de este torneo");
        this.router.navigate(['referee/tournament/list']);    
      }else{

        //aisgnar la manera en se van a mostrar 
      if( this.historyTournament.currentStage == "final"){

        this.historyTournament.final.matches.forEach((element: matches[]) => {                  
          //agregar al arreglo de finales                                    
          //console.log(element);            
          
          this.Arrfinal.push({
            _id: element[0]._id +"-"+element[1]._id,
            name1: element[0].name,
            Logo1: element[0].teamLogo,
            name2: element[1].name,
            Logo2: element[1].teamLogo,
            })

        });      
          //console.log(this.Arrfinal)
      }    
      
      if( this.historyTournament.currentStage == "semiFinal"){        
        this.historyTournament.semiFinal.matches.forEach((element: matches[]) => {                  
          //agregar al arreglo de finales                                    
          //console.log(element);                      
          this.ArrSemi.push({
            _id: element[0]._id +"-"+element[1]._id,
            name1: element[0].name,
            Logo1: element[0].teamLogo,
            name2: element[1].name,
            Logo2: element[1].teamLogo,
            })

            this.ArrSemi.push({
              _id: element[2]._id +"-"+element[3]._id,
              name1: element[2].name,
              Logo1: element[2].teamLogo,
              name2: element[3].name,
              Logo2: element[3].teamLogo,
              })
        });      
          //console.log(this.Arrfinal)
      }


      if( this.historyTournament.initialStage == "semiFinal"){
        this.historyTournament.semiFinal.matches.forEach((element: matches[]) => {                  
          //agregar al arreglo de finales                                    
          console.log(element);                      
          this.ArrSemi.push({
            _id: element[0]._id +"-"+element[1]._id,
            name1: element[0].name,
            Logo1: element[0].teamLogo,
            name2: element[1].name,
            Logo2: element[1].teamLogo,
            })

            /*
            this.ArrSemi.push({
              _id: element[2]._id +"-"+element[3]._id,
              name1: element[2].name,
              Logo1: element[2].teamLogo,
              name2: element[3].name,
              Logo2: element[3].teamLogo,
              })
              */
        });      
        
      }
      
      }
          
    });    

  }

  goto(match_id: string ){    

    console.log(match_id);        
      //+this.tournament+'/categories/'+this.category+'/data/'+match_id            
      this.router.navigate(['referee/tournament/team-score/'+this.tournament+'/'+this.category+'/'+match_id]);    
  }
}
