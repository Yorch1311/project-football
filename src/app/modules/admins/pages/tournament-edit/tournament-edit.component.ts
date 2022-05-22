import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, ElementRef, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { DialogCancelComponent } from '../../../../shared/components/dialog-cancel/dialog-cancel.component';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { tupla } from '../../services/type'
import { Item } from '../../services/type'
import { oficial } from '../../services/type'

import { date_crate_edit } from '../../services/type'

@Component({
  selector: 'app-tournament-edit',
  templateUrl: './tournament-edit.component.html',
  styleUrls: ['./tournament-edit.component.scss']
})
export class TournamentEditComponent implements OnInit {

   //datos por si hay id
   nombreSend: string ="";
   datesend: date_crate_edit= {init:"", final:""};
   timeSend: string = "";
   categoriSend: String = "";  
   typeSend: String = "";
   citySend: String = "";
   placeSend: String = "";
   branchsSend: String [] = [];
 
   //daros para llenar y crear torneo
   name: String = "";
   categori: String = "";  
   branches: String [] = [];  
   typeTournamet: String = "";
   city: number | any;  
   place: number | any;  
 
   date: date_crate_edit= {init:"", final:""};   
   time: String = "";
   



   //para buscar 
   brancheshid:String[] = [];
   adminsid:String [] = [];
   admins: String[] = [];  
   arbitersid :String [] = [];
   arbiters: String[] = [];    
   coachsid : String[] = [];
   coachs: String[] = [];    
   placeid: String [] = [];


   //para recibir datos de la consulta x id 
   objetoItemArray: Item [] = [];
   objectItem:Item = {_id:"", name:""};
   objectOficial: oficial [] = [] ;
   


  
  //para almacenar datos  y mostrarlos en select's
   itemsCategory: Item[] = [];    
   itemsbranch: Item[] = [ ];        
   itemstype: Item[] = [];
   itemscyty: Item[] = [];  
   itemsplace: Item[] = [];    
   itemsAdmin: Item[] = [];   
   itemsreferee: Item[] = [];              
   itemsTrainers: Item[] = [];  
 
   //variable donde se compara el id   
   id: string | null;  
   //
  constructor(public dialog: MatDialog, private router: Router, private APIcreate: ServiceService, private routerAc: ActivatedRoute, private _snackBar: MatSnackBar) { 
    this.id = this.routerAc.snapshot.paramMap.get("id");
  }




      diaMes: String = "";      
      year: String = "";
      status: string = "";

  ngOnInit(): void {
    //obtener los datos de la bd
      //extraer la info de la base de datos
      this.APIcreate.ObtenerData().subscribe(datos =>{
        //console.log(datos);
        //this.itemsCategory = datos['categories'];
        //this.itemsbranch = datos['branches'];
        this.itemstype = datos['types'];
        this.itemscyty = datos['cities'];
        this.itemsAdmin = datos['admins'];
        this.itemsreferee = datos['referees'];
        this.itemsTrainers = datos['coaches'];      
      })  

      //para buscar por id
      //6289c2d577b219739d358763        
    //obtener ps datos por id de la bd
    if(this.id !== null){            
      this.APIcreate.Searchid(this.id).subscribe(result =>{        
        //console.log(result);
        //ontener nombre
        this.nombreSend = result['name'];
        this.name = this.nombreSend;

        /*
        //obtener categoria
        this.objectItem= result['category'];
        this.categoriSend = this.objectItem._id;
        console.log(this.categoriSend);
        this.onChangeCategori(this.categoriSend);
        */

        /*
        //obtrener ramas
        this.objetoItemArray = result['branches'];        
        */

        //obtener tipo de torneo 
        this.objectItem = result['type'];
        this.typeSend = this.objectItem._id;
        this.onChangetypetournament(this.typeSend);

        //obtener ciudad
        this.objectItem = result['city'];
        this.citySend = this.objectItem._id;
        this.onChangecity(this.citySend);

        //obtener Fecha
        this.datesend = result['dates'];
        this.onChangeDate(this.datesend);
      

        //obtener place
        this.objetoItemArray = result['places'];
        this.placeSend = this.objetoItemArray[0]._id;
        this.onChangeplace(this.placeSend);

          //obtener dmins, couches and referees
          this.objectOficial.push(result['officials']);                
          this.objectOficial[0].admins.forEach( admin => {
            //console.log(admin);
            this.onChangeAdmin(admin);
          });
  
          this.objectOficial[0].coaches.forEach( coach => {
            //console.log(coach);
            this.onChangeCoach(coach);
          });
  
          this.objectOficial[0].referees.forEach( referee => {
            //console.log(referee);
            this.onChangeArbiter(referee);
          });                        


        //obtener status
          this.status = result['status'];
          
        //obtener hours
        this.timeSend = result['hours'];
        this.onChangeTime(this.timeSend);      
        
        
      })
              

    }else{               

       //mostrar snavbar
       this._snackBar.open('Error no se encontro id', 'X', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,                    
        //panelClass: ['green-snackbar'],
        panelClass: ['red-snackbar'],
      });
      
        this.router.navigate(["admin/tournament/detail/" + this.id + "/status/ in-process"]);    
      //mandar a la pagina del cristian
      //this.router.navigate(["football/tournaments"]);

    }    
  }

  //variable pos para arbiter, coach    
  pos : number = 0;

  //obtener admins  
  onChangeAdmin(admin: Item){    
    this.adminsid.push(admin._id);
    this.admins.push(admin.name);
    // para borrar  y que ya no aparesca sino aparesca abajo en el group-show
    this.itemsAdmin = this.itemsAdmin.filter((adm) => adm._id !== admin._id )            
  }  

  //Eliminar Admnis
  DeleteAdmin(admin:  String){        
    this.pos = this.admins.indexOf(admin);    
    this.itemsAdmin.push( {_id:this.adminsid[this.pos], name: this.admins[this.pos] });
    //eliminar el string
    this.admins.splice(this.pos, 1);    
    //eliminar el id
    this.adminsid.splice(this.pos, 1);    
  }

  //obtener arbiter
  onChangeArbiter(arbiter: Item){    
    this.arbitersid.push(arbiter._id);    
    this.arbiters.push(arbiter.name);    
    this.itemsreferee = this.itemsreferee.filter((adm) => adm._id !== arbiter._id )        
  }  

  //delete arbiter
  DeleteArbiter(arbiter: string){    
    //alert(valac);
    this.pos = this.arbiters.indexOf(arbiter);    
    this.itemsreferee.push( {_id:this.arbitersid[this.pos], name: this.arbiters[this.pos] });
    this.arbitersid.splice(this.pos, 1);    
    this.arbiters.splice(this.pos, 1);        

  }
  
 //obtener coach
  onChangeCoach(coach: Item){
    this.coachsid.push(coach._id);
    this.coachs.push(coach.name);    
    this.itemsTrainers = this.itemsTrainers.filter((adm) => adm._id !== coach._id )        
    //console.log(coach.id);
  }  

  //Eliminar coach
  DeleteCoach(coach: string){    
    //alert(valac);
    this.pos = this.coachs.indexOf(coach);    
    this.itemsTrainers.push( {_id:this.coachsid[this.pos], name: this.coachs[this.pos]});
    this.coachsid.splice(this.pos, 1);    
    this.coachs.splice(this.pos, 1);            
  }

  //nombre del torneo
  onChangeNameTournament(data:String){
    this.name = data;
    //alert(this.name)
  }

  //obtener ramas
  getGenders(data: String[]){
    this.branches = data;        
    //console.table(data);
    //alert(this.branches);
  }

  
  //obtener categoria
  onChangeCategori(data: String){        
    this.categori = data;   
    //alert(data);
  }  

  //obtener tipo de torneo
  onChangetypetournament(data: String){
    this.typeTournamet = data;
  }



  //itemsplacedata: place[] = []
  //obtener ciudad
  onChangecity(data: String){
    this.city = data;        
        
    //limpiamos en caso de que cambie de ciudad
    this.itemsplace.splice(0, this.itemsplace.length);

    this.APIcreate.ObtenerPlaces(this.city).subscribe(places =>{
      this.itemsplace = places['places'];      
      //console.table(this.itemsplace);
    })

  }


  //obtener lugar
  onChangeplace(data: String){
    this.place = data;
  }

  //date  
  onChangeDate(data: date_crate_edit){    
    this.date = data;    
  }

  //horario 
  onChangeTime(data: String){
    this.time = data;
  }


  Cancel() {      
            
    const dialogRef = this.dialog.open(DialogCancelComponent, {
      width: '420px',
      height: '200px',                
    });   
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if ( result == true){
          //mandar a la pagina del jorge
          this.router.navigate(["admin/tournament/detail/"+this.id+"/status/"+this.status]);
      }      
    });              
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  CrearTou(){   
    
    if( (this.name == null) || (this.time == null) || (this.date == null) || (this.typeTournamet == null) || (this.city == null)  || (this.place == null) ||
      (this.adminsid[0] == null) || (this.arbitersid[0] == null) || (this.coachsid[0] == null)
    ){
      
      this._snackBar.open('Error faltan datos', 'X', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,          
        //panelClass: ['green-snackbar'],
        panelClass: ['red-snackbar'],
      });      

    }else{

              //obtener id de lugares en arreglo
              console.log(this.place)
              this.placeid.push(this.place);            
                                
              if(this.id != null){         
      
                console.log(this.name);
                
                //_id: this.id,
                const datasend : tupla = {            
                  name: this.name,          
                  type: this.typeTournamet,      
                  dates: this.date,   //del tipo date_crate_edi
                  city: this.city,
                  places: this.placeid,          
                  hours: this.time,
                  admins: this.adminsid,
                  coaches: this.coachsid,
                  referees: this.arbitersid,          
                };
      
                console.table(datasend);
              
                this.APIcreate.updateTournament(datasend, this.id).subscribe(result =>{
                //console.log(result);
      
                //mostrar snavbar
                this._snackBar.open('Torneo Editado exitosamente', 'X', {
                  horizontalPosition: this.horizontalPosition,
                  verticalPosition: this.verticalPosition, 
                  panelClass: ['green-snackbar'],
                  //panelClass: ['red-snackbar'],                   
                });
              
                this.router.navigate(["admin/tournament/detail/" + this.id + "/status/"+this.status]);      
              })               
              /*
              if(this.status == ""){
                this._snackBar.open('Error no se encontro el status', 'X', {
                  horizontalPosition: this.horizontalPosition,
                  verticalPosition: this.verticalPosition, 
                  //panelClass: ['green-snackbar'],
                  panelClass: ['red-snackbar'],                   
                });
              }
              */                    
              }                                                    
    }
   }      
}
