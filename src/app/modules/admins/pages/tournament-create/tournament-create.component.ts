import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { DialogCancelComponent } from '../../../../shared/components/dialog-cancel/dialog-cancel.component';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { tupla } from '../../services/type'
import { Item } from '../../services/type'
import { date_crate_edit } from '../../services/type'

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.scss']
})
export class TournamentCreateComponent implements OnInit {

  //datos por si hay id
  nombreSend: string ="";
  datesend: String ="";
  timeSend: String = "";
  categoriSend: String = "";
  typeSend: String = "";
  citySend: String = "";
  placeSend: String = "";
  branchsSend: String [] = [];

  //daros para llenar y crear torneo
  name: String | null = null;
  categori: number | any;
  branches: String [] = [];
  typeTournamet: number | any;
  city: number | any;
  place: number | any;

  date: date_crate_edit= {init:"", final:""};
  time: String | null = null;



  //para buscar
  brancheshid:String[] = [];
  adminsid: String [] = [];  
  admins: String [] = [];
  arbitersid :String [] = [];
  arbiters: String[] = [];
  coachsid :String[] = [];
  coachs: String[] = [];
  placeid: String [] = [];


 //para almacenar datos  y mostrarlos en select's
  itemsCategory: Item[] = [];
  itemsbranch: Item[] = [];  
  itemstype: Item[] = [];
  itemscyty: Item[] = [];
  itemsplace: Item[] = [];
  itemsAdmin: Item[] = [];
  itemsreferee: Item[] = [];
  itemsTrainers: Item[] = [];  
  
  //,  private APIcreate: ServiceService
  constructor(public dialog: MatDialog, private router: Router, private APIcreate: ServiceService,  private _snackBar: MatSnackBar) {    
  }

  ngOnInit(): void {
    //extraer la info de la base de datos
    this.APIcreate.ObtenerData().subscribe(datos =>{
      console.log(datos);
      this.itemsCategory = datos['categories'];
      this.itemsbranch = datos['branches'];
      this.itemstype = datos['types'];
      this.itemscyty = datos['cities'];
      this.itemsAdmin = datos['admins'];
      this.itemsreferee = datos['referees'];
      this.itemsTrainers = datos['coaches'];      
    })
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
    this.itemsAdmin.push( {_id: this.adminsid[this.pos], name: this.admins[this.pos] });
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
  onChangeNameTournament(data: String){
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
      console.table(this.itemsplace);
    })

  }

  //obtener lugar
  onChangeplace(data: String){
    //console.log(data);
    this.place = data;

  }

  //date
  onChangeDate(data: date_crate_edit){
    this.date = data
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
            //mandar a la pagina del cristian
            this.router.navigate(["admin/tournament/show"]);
        }
    });
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  CrearTou(){
    
    if( (this.name == null) || (this.time == null) || (this.date == null) || (this.categori == null) || (this.branches[0] == null) || (this.typeTournamet == null) || (this.city == null)  || (this.place == null) ||
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


        //obtener id de las ramas
        this.branches.forEach(result => {
          this.brancheshid.push(result);
        });        

        const datasend : tupla = {
          name: this.name,          
          type: this.typeTournamet,
          branches: this.brancheshid,
          category: this.categori,          
          dates: this.date,   //del tipo date_crate_edi
          city: this.city,
          places: this.placeid,          
          hours: this.time,
          admins: this.adminsid,
          coaches: this.coachsid,
          referees: this.arbitersid,          
        };


       // console.log(datasend)
        //console.table(datasend);

      
        
        this.APIcreate.createTournamet(datasend).subscribe(result =>{
            //console.log(result);
        })        
        

        //mostrar snavbar
        this._snackBar.open('Torneo creado exitosamente', 'X', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,          
          panelClass: ['green-snackbar'],
          //panelClass: ['red-snackbar'],
        });

        //Crear la tupla y regresar al chrisyian
        this.router.navigate(["admin/tournament/show"]);
      }
   }



}
