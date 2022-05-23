import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  id_tournament: string | null;    
  id_branch: string | null;    

  constructor(private router: Router, private _snackBar: MatSnackBar, private _router: ActivatedRoute) {
    this.id_tournament = this._router.snapshot.paramMap.get("tournament");
    this.id_branch = this._router.snapshot.paramMap.get("id");
   }

  
  name: String | null = null;
  player: String | null = null;
  Curp: String | null = null;
  nplayer: String | null = null;

  ngOnInit(): void {    
  }  

//nombre del equipo
  onChangeNameTeam(data: String){
  this.name = data;
  alert(this.name)
  }

  onChangeNamePlayer(data: String){
    this.player = data;
    console.log(this.player)    
  }

  onChangeINE(data: String){
    if(data.length !== 18 ){      
      this._snackBar.open('Error la Ine debe de tener 18 caracteres', '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',         
        //panelClass: ['green-snackbar'],
        panelClass: ['red-snackbar'],
        duration: 3000,                   
      });
    }else{
      this.Curp = data;
      console.log(this.Curp)       
    }    
  }

  onChangeNumberPlayer(data: string){
    if(data.length > 2 || parseInt(data) < 1 ){                        
      this._snackBar.open('Error numero invalido', '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',         
        //panelClass: ['green-snackbar'],
        panelClass: ['red-snackbar'],
        duration: 3000,                   
      });
    }else{    
      this.nplayer = data
      console.log(this.nplayer)      
    }     
  }


  obtenerImage(){
    alert("mostrar ");
  }

  register(){
    this._snackBar.open('Equipo registrado exitosamente', 'X', {
      horizontalPosition: 'right',
      verticalPosition: 'top',          
      panelClass: ['green-snackbar'],
    });

    this.router.navigate(["trainer/tournament/"+this.id_tournament+"/categories"]);
  }

}
