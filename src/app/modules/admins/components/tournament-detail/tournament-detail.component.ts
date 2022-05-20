import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { TournamentDetail } from '../../services/type';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.scss']
})
export class TournamentDetailComponent implements OnInit {

  @Input() id: string | null = "";
  @Input() status: string | null = "";

  data: TournamentDetail | undefined;
  activeCount: number = 0;
  clase: string = '';// clase del boton, le da su diseño

  dataTest: TournamentDetail = {
    name: 'UASITOS',
    category: 'Juvenil',
    type: 'Fase de grupos',
    places_detail: [
      { name: 'FIM' },
      { name: 'Deportiva'}
    ],
    admin_detail: [{
      name: 'Profesor Herman',
      apellido1: ''
    }],
    referee_detail: [{
      name: 'Profesor Herman',
      apellido1: ''
    }],
    coach_detail: [
      {
        name: 'Profesor Herman',
        apellido1: ''
      },
      {
        name: 'Profesor Francisco',
        apellido1: ''
      }
    ],
    chips: [
      {
        id_chip: '1',
        name_category: 'Juvenil',
        name_branch: 'Varonil',
        status: 'true'
      },
      {
        id_chip: '2',
        name_category: 'Juvenil',
        name_branch: 'Femenil',
        status: 'false'
      }
    ],
    dates: '18/05/2022 - 25/05/022',
    time: '14:00 - 18:00'
  };

  constructor(private _router: ActivatedRoute, private router: Router, private service: ServiceService) {}

  ngOnInit(): void {

    if(this.id != null) {

      //Uso del servicio para comunicarse con la API.
      //this.service.getTournamentData(this.id).subscribe( data => this.data = data );

      this.data = this.dataTest;

      /*if (this.data.category.length > 1){
        let cant = this.data.category.length - 1;

        for(let i=0; i<cant; i++){
          this.data.category.pop();
        }
        this.data.categorias.push("Y más");
      }*/
      this.activeCount = this.data.chips.filter((c: { status: string }) => c.status == "true").length;

      if(this.activeCount > 0 && this.status == 'in-process'){
        this.clase = 'button fill';
      }else{
        this.clase = 'button fill disable';
      }
    }
  }

  /*
    Redirecciona a la pagina createTree la cual recibe un ID
  */
  goto(id: string){
    this.router.navigate(["admin/tournament/manage-teams/" + id]);
  }

  /*
    Redirecciona a la pagina createTournament la cual recibe un ID
  */
  redirect(){
    this.router.navigate(["football/createTournament/" + this.id]);
  }

  //Funcion para activar el torneo
  activeTournament(){
    if(this.activeCount > 0){
      alert("Event Triggered!!");

      //this.service.activeTournament(this.id).subscribe( result => {});
    }

  }
}
