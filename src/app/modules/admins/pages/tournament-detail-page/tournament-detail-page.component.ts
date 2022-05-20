import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournament-detail-page',
  templateUrl: './tournament-detail-page.component.html',
  styleUrls: ['./tournament-detail-page.component.scss']
})
export class TournamentDetailPageComponent implements OnInit {

  constructor(private _router: ActivatedRoute) { }

  id: string | null = "";
  status: string | null = "";


  ngOnInit(): void {
    this.id = this._router.snapshot.paramMap.get("id");
    this.status = this._router.snapshot.paramMap.get("status");
  }

}
