import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { TournamentDetail } from '../../services/type';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.scss'],
})
export class TournamentDetailComponent implements OnInit {
  @Input() id: string | null = '';
  @Input() status: string | null = '';

  data: TournamentDetail | undefined;
  activeCount: number = 0;
  clase: string = ''; 
  estado: boolean = false;

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit(): void {
    if (this.id != null) {
      //Uso del servicio para comunicarse con la API.
      this.service.getTournamentData(this.id).subscribe( data => this.data = data );

      //if (this.activeCount > 0 && this.status == 'in-process') {
      if (this.status == 'in-process') {
        this.clase = 'button fill';
      } else {
        this.clase = 'button fill';
        this.estado = true;
      }
    }
  }

  goto(id: string) {
    this.router.navigate(['admin/tournament/'+this.id+'/manage-teams/' + id]);
  }


  redirect() {
    this.router.navigate(['admin/tournament/edit/' + this.id]);
  }

  activeTournament() {
    alert('Event Triggered!!');

    //this.service.activeTournament(this.id).subscribe( result => {});
  }
}
