import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { TournamentCategories } from '../../services/type';

@Component({
  selector: 'app-tournament-categories-reffee',
  templateUrl: './tournament-categories-reffee.component.html',
  styleUrls: ['./tournament-categories-reffee.component.scss']
})
export class TournamentCategoriesReffeeComponent implements OnInit {

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
    this.router.navigate(['trainer/tournament/'+this.id+'/categories/'+id+'/create-team'])
  }

}
