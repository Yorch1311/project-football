import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Item } from 'src/app/modules/admins/services/type';

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

  value:string ="";
  valuenum: number | any;

  //arrego a mostrar el group 
  ArrayPlayers:String []= [];

  ngOnInit(): void {    
  }  

//nombre del equipo
  onChangeNameTeam(data: String){
    this.name = data;  
  }

  onChangeNamePlayer(data: String){
    this.player = data;  
  }

  onChangeCurp(data: String){
    if(data.length !== 18 ){      
      this._snackBar.open('Error la Curp debe de tener 18 caracteres', '', {
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
    if(data.length > 2 || parseInt(data) < 1 || data == null ){                        
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

  obtenerImage(img: string){
    console.log(img);
  }
  
  AddPlayer(){
    if(this.player == "" || this.nplayer == "" || this.nplayer == null || this.Curp == "" || this.Curp == null || this.Curp.length !== 18 ){
        
      this._snackBar.open('Error Faltan datos verifique!!', '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',         
        //panelClass: ['green-snackbar'],
        panelClass: ['red-snackbar'],
        duration: 3000,         

      });

    }else{      
      this.ArrayPlayers.push(this.player+"-"+this.nplayer);
      this.player= "";
      this.nplayer = "";
      this.Curp = "";
      this.value= " ";
    }
  }

  pos : number = 0;
  DeletePlayer(data: string){    
    this.pos = this.ArrayPlayers.indexOf(data);        
    this.ArrayPlayers.splice(this.pos, 1);    
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
