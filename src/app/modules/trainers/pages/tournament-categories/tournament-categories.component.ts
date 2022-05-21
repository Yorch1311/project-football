import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { TournamentCategories } from '../../services/type';

@Component({
  selector: 'app-tournament-categories',
  templateUrl: './tournament-categories.component.html',
  styleUrls: ['./tournament-categories.component.scss']
})
export class TournamentCategoriesComponent implements OnInit {

  data: TournamentCategories | undefined;
  id: string | null = '';

  chips: TournamentCategories = {
    name: 'UASITOS',
    chips: [
      {
        id_chip: '1',
        name_category: 'Juvenil 1',
        name_branch: 'Varonil',
        status: 'true'
      },
      {
        id_chip: '2',
        name_category: 'Juvenil 1',
        name_branch: 'Femenil',
        status: 'false'
      },
      {
        id_chip: '2',
        name_category: 'Juvenil 1',
        name_branch: 'Femenil',
        status: 'false'
      }
    ]
  }

  texto: string = '';
  constructor(private router: Router, private url: ActivatedRoute, /*private service: ServiceService*/) { }

  ngOnInit(): void {
    this.id = this.url.snapshot.paramMap.get('id');

    if(this.id != null){
      //Uso del servicio para comunicarse con la API.
      //this.service.getTournamentData(this.id).subscribe( data => this.data = data );
      this.data = this.chips;

      //this.texto = this.data.chips.name_category + ' - ' + this.data.chips[0].name_category;
    }
  }

  goto(id: string){
    this.router.navigate(['trainer/tournament/'+this.id+'/categories/create-team'])
  }

}
