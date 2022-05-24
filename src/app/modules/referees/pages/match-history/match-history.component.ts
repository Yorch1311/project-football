import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatchHistory } from '../../services/type';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss'],
})
export class MatchHistoryComponent implements OnInit {
  history: MatchHistory | undefined;
  category: String | null;
  tournament: String | null;

  constructor(
    private service: ServiceService,
    private _router: ActivatedRoute,
    private router: Router
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

    /*this.service.getMatchHistory(String(this.tournament), String(this.category)).subscribe((history) => {
        this.history = history;
    });*/
  }

  ngOnInit(): void {}

  goto(match_id: string, actual_phase: string | undefined){
    if(actual_phase == this.history?.actual_phase){
      this.router.navigate(['referee/tournament/'+this.tournament+'/categories/'+this.category+'/data/'+match_id]);
    }
  }
}
