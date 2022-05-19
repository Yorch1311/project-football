import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, ElementRef, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { DialogCancelComponent } from '../../../../shared/components/dialog-cancel/dialog-cancel.component';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { tupla } from '../../services/type'
import { Item } from '../../services/type'

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.scss']
})
export class TournamentCreateComponent implements OnInit {

  //datos por si hay id
  nombreSend: string ="";
  datesend: string ="";
  timeSend: string = "";
  categoriSend: number = 0;  
  typeSend:number = 0;
  citySend: number = 0;
  placeSend: number = 0;
  branchsSend: number [] = [];

  //daros para llenar y crear torneo
  name: string | null = null;
  categori: number | any;  
  branches: number [] = [];  
  typeTournamet: number | any;
  city: number | any;  
  place: number | any;  

  date: string | null = null;
  time: string | null = null;
  
  
  
  //para buscar 
  brancheshid:number[] = [];
  adminsid:number [] = [];
  admins: string[] = [];  
  arbitersid :number [] = [];
  arbiters: string[] = [];    
  coachsid :number[] = [];
  coachs: string[] = [];    
  placeid: number [] = [];


 //para almacenar datos  y mostrarlos en select's
  itemsCategory: Item[] = [
    {id: 1 , name: "Ejemplo1"},
    {id: 2 , name: "Ejemplo2"},
  ];    
  itemsbranch: Item[] = [ 
    {id: 1 , name: "Ejemplo1"},
    {id: 2 , name: "Ejemplo2"},
  ];        
  itemstype: Item[] = [
    {id: 1 , name: "Ejemplo1"},
    {id: 2 , name: "Ejemplo2"},
  ];
  itemscyty: Item[] = [
    {id: 1 , name: "Ejemplo1"},
    {id: 2 , name: "Ejemplo2"},
  ];  
  itemsplace: Item[] = [
    {id: 1 , name: "Ejemplo1"},
    {id: 2 , name: "Ejemplo2"},
  ];    
  itemsAdmin: Item[] = [
    {id: 1 , name: "Ejemplo1"},
    {id: 2 , name: "Ejemplo2"},
  ];   
  itemsreferee: Item[] = [
    {id: 1 , name: "Ejemplo1"},
    {id: 2 , name: "Ejemplo2"},
  ];              
  itemsTrainers: Item[] = [
    {id: 1 , name: "Ejemplo1"},
    {id: 2 , name: "Ejemplo2"},
  ];  
  
  constructor(public dialog: MatDialog, private router: Router,  private APIcreate: ServiceService, private _snackBar: MatSnackBar) {    
  }

  ngOnInit(): void {
    //extraer la info de la base de datos    
  }

   //variable pos para arbiter, coach    
   pos : number = 0;

  //obtener admins  
  onChangeAdmin(admin: Item){    
    this.adminsid.push(admin.id);
    this.admins.push(admin.name);
    // para borrar  y que ya no aparesca sino aparesca abajo en el group-show
    this.itemsAdmin = this.itemsAdmin.filter((adm) => adm.id !== admin.id )            
  }  

  //Eliminar Admnis
  DeleteAdmin(admin:  string){        
    this.pos = this.admins.indexOf(admin);    
    this.itemsAdmin.push( {id:this.adminsid[this.pos], name: this.admins[this.pos] });
    //eliminar el string
    this.admins.splice(this.pos, 1);    
    //eliminar el id
    this.adminsid.splice(this.pos, 1);    
  }

  //obtener arbiter
  onChangeArbiter(arbiter: Item){    
    this.arbitersid.push(arbiter.id);    
    this.arbiters.push(arbiter.name);    
    this.itemsreferee = this.itemsreferee.filter((adm) => adm.id !== arbiter.id )        
  }  

  //delete arbiter
  DeleteArbiter(arbiter: string){    
    //alert(valac);
    this.pos = this.arbiters.indexOf(arbiter);    
    this.itemsreferee.push( {id:this.arbitersid[this.pos], name: this.arbiters[this.pos] });
    this.arbitersid.splice(this.pos, 1);    
    this.arbiters.splice(this.pos, 1);        

  }
  
 //obtener coach
  onChangeCoach(coach: Item){
    this.coachsid.push(coach.id);
    this.coachs.push(coach.name);    
    this.itemsTrainers = this.itemsTrainers.filter((adm) => adm.id !== coach.id )        
    //console.log(coach.id);
  }  

  //Eliminar coach
  DeleteCoach(coach: string){    
    //alert(valac);
    this.pos = this.coachs.indexOf(coach);    
    this.itemsTrainers.push( {id:this.coachsid[this.pos], name: this.coachs[this.pos]});
    this.coachsid.splice(this.pos, 1);    
    this.coachs.splice(this.pos, 1);            
  }

  //nombre del torneo
  onChangeNameTournament(data: string){
    this.name = data;
    //alert(this.name)
  }

  //obtener ramas
  getGenders(data: number[]){
    this.branches = data;        
    //console.table(data);
    //alert(this.branches);
  }

  
  //obtener categoria
  onChangeCategori(data: number){        
    this.categori = data;   
    //alert(data);
  }  

  //obtener tipo de torneo
  onChangetypetournament(data: number){
    this.typeTournamet = data;
  }



  //itemsplacedata: place[] = []
  //obtener ciudad
  onChangecity(data: number){
    this.city = data;        
    
    /*
    //limpiamos en caso de que cambie de ciudad
    this.itemsplace.splice(0, this.itemsplace.length);

    //en base al id de la ciudad muestro los datos del los lugares
    this.itemscitydata.forEach(result =>{
      //console.log(result.id_town);                  
      if( parseInt(result.id_town) == this.city){                                  
        result.places.forEach(dataplace => {          
          this.itemsplace.push({id: dataplace.id_place,name: dataplace.name});                            
        }) 
      }       
    });            
  */
    
    //console.log(this.itemsplace);

  }

  //obtener lugar
  onChangeplace(data: number){
    this.place = data;
  }

  //date  
  onChangeDate(data: string){    
    this.date = data;    
  }

  //horario 
  onChangeTime(data: string){
    this.time = data;
  }

/*
  if(this.id != null){         
    //mandar a la pagina de detallles

    //this.router.navigate(["football/tournament-detail/" + this.id]);      
  }else{                
    //mandar a la pagina del cristian
    //this.router.navigate(["football/tournaments"]);
  }    
*/

  Cancel() {              
    const dialogRef = this.dialog.open(DialogCancelComponent, {

      width: '420px',
      height: '200px',                
    });   
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);      
        if ( result == true){
            //mandar a la pagina del cristian
            //this.router.navigate(["football/tournaments"]);
        }      
    });              
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  CrearTou(){   
    //validaciones
    /*
    if( (this.name == null) || (this.time == null) || (this.date == null) || (this.categori == null) || (this.branches[0] == null) || (this.typeTournamet == null) || (this.city == null)  || (this.place == null) ||
      (this.adminsid[0] == null) || (this.arbitersid[0] == null) || (this.coachsid[0] == null)
    ){    
      alert("Error faltan datos");

    }else{
    
   
        //obtener id de lugares en arreglo
        console.log(this.place)
        this.placeid.push(this.place);

      
        //obtener id de las ramas
        this.branches.forEach(result => {                
          this.brancheshid.push(result);
        });
                          

        const datasend : tupla = {
          name: this.name,
          category: this.categori,
          branch: this.brancheshid,
          type: this.typeTournamet,
          town: this.city,
          places: this.placeid,
          dates: this.date,    
          time: this.time,        
          administrators: this.adminsid,
          referees: this.arbitersid,
          coaches: this.coachsid,
        };      


        console.table(datasend);      

        */
        /*
        this.APIcreate.createTournamet(datasend).subscribe(result =>{
            console.log(result);
        })
        */
                
        //mostrar snavbar
        this._snackBar.open('Torneo creado exitosamente', 'X', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,                    
          //panelClass: ['green-snackbar'],          
          panelClass: ['red-snackbar'],          
        });

        //Crear la tupla y regresar al chrisyian
        //this.router.navigate(["football/tournaments"]);
      /*}*/
   }
      


}
