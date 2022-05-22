import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { TournamentCategories } from '../../services/type';

@Component({
  selector: 'app-tournament-categories-referee',
  templateUrl: './tournament-categories-referee.component.html',
  styleUrls: ['./tournament-categories-referee.component.scss']
})
export class TournamentCategoriesRefereeComponent implements OnInit {

  data: TournamentCategories | undefined;
  id: string | null = '';

  texto: string = '';
  constructor(private router: Router, private url: ActivatedRoute, private service: ServiceService) { }

  ngOnInit(): void {
    this.id = this.url.snapshot.paramMap.get('id');

    if(this.id != null){
      //Uso del servicio para comunicarse con la API.
      this.service.getTournamentCategories(this.id).subscribe( data => this.data = data );
    }
  }

  goto(id: string){
    this.router.navigate(['referee/tournament/'+this.id+'/rivals/'])
  }

}
