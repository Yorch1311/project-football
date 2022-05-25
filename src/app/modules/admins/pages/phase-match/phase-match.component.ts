import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { TournamentMatch } from '../../services/type';

@Component({
  selector: 'app-phase-match',
  templateUrl: './phase-match.component.html',
  styleUrls: ['./phase-match.component.scss']
})
export class PhaseMatchComponent implements OnInit {

  history: TournamentMatch | undefined;
  category: string | null;
  tournament: string | null;
  phase: string | null;


  constructor(private service: ServiceService,private _router: ActivatedRoute,private router: Router) {

    this.tournament = this._router.snapshot.paramMap.get('tournament');
    this.category = this._router.snapshot.paramMap.get('category');
    this.phase = this._router.snapshot.paramMap.get('phase');


    this.service.getMatchHistory(String(this.tournament), String(this.category)).subscribe((history) => {
      this.history = history;
    });
  }

  ngOnInit(): void {

  }

  goto(phase: string, id_match: string) {
    if(phase == this.history?.currentStage){
      this.router.navigate(['referee/tournament/team-score/' +this.tournament +'/category/' +this.category +'/match/'+id_match]);
    }
  }

}
