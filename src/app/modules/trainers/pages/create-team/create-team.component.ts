import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  id_tournament: string | null | undefined;
  id_branch: string | null | undefined;

  constructor(private router: Router, private _snackBar: MatSnackBar, private _router: ActivatedRoute) { }

  ngOnInit(): void {

    this.id_tournament = this._router.snapshot.paramMap.get("tournament");
    this.id_branch = this._router.snapshot.paramMap.get("id");
  }

  register(){

    alert("Event");


    this._snackBar.open('Equipo registrado exitosamente', 'X', {
      horizontalPosition: 'right',
      verticalPosition: 'top',          
      panelClass: ['green-snackbar'],
    });

    this.router.navigate(["trainer/tournament/"+this.id_tournament+"/categories"]);
  }
}
