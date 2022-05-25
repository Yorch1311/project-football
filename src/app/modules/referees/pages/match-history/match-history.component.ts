import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { TournamentMatch } from '../../services/type';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss'],
})
export class MatchHistoryComponent implements OnInit {
  history: TournamentMatch | undefined;
  category: String | null;
  tournament: String | null;

  constructor(private service: ServiceService,private _router: ActivatedRoute,private router: Router) {

    this.tournament = this._router.snapshot.paramMap.get('id');
    this.category = this._router.snapshot.paramMap.get('id_category');

  }

  ngOnInit(): void {
    this.service.getMatchHistory(String(this.tournament), String(this.category)).subscribe((history) => {
        this.history = history;
      });
  }

  goto(phase: string, id_match: string) {
    if(phase == this.history?.currentStage){
      this.router.navigate(['referee/tournament/team-score/' +this.tournament +'/category/' +this.category +'/match/'+id_match]);
    }
  }
}
