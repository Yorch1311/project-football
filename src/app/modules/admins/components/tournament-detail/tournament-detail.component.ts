import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { Chip } from '../../services/type';
import { TournamentDetail } from '../../services/type';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.scss']
})
export class TournamentDetailComponent implements OnInit {

  @Input() id: string | null = "";
  @Input() status: string | null = "";

  data: TournamentDetail | any;
  activeCount: number = 0;
  clase: string = "";// clase del boton, le da su diseño

  constructor(private _router: ActivatedRoute, private router: Router, private service: ServiceService) {}

  ngOnInit(): void {

    if(this.id != null) {

      //Uso del servicio para comunicarse con la API.
      this.service.getTournamentData(this.id).subscribe( data => this.data = data );

      /*if (this.data.category.length > 1){
        let cant = this.data.category.length - 1;

        for(let i=0; i<cant; i++){
          this.data.category.pop();
        }
        this.data.categorias.push("Y más");
      }*/

      //this.activeCount = this.data.chips.filter((c: Chip) => c.estado == "true").length;
    }
  }

  /*
    Redirecciona a la pagina createTree la cual recibe un ID
  */
  goto(id: string){
    this.router.navigate(["football/createTree/" + id]);
  }

  /*
    Redirecciona a la pagina createTournament la cual recibe un ID
  */
  redirect(){
    this.router.navigate(["football/createTournament/" + this.id]);
  }

  //Funcion para activar el torneo
  active(){
    if(this.activeCount > 0){
      alert("Event Triggered!!");

      //this.service.activeTournament(this.id).subscribe( result => {});
    }

  }
}
