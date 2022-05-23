import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Item } from 'src/app/modules/admins/services/type';
import {MatDialog} from '@angular/material/dialog';
import { DialogCancelComponent } from '../../../../shared/components/dialog-cancel/dialog-cancel.component';
import { team, teamList } from '../../services/type';
import { player } from '../../services/type';
import { ServiceService } from '../../services/service.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  id_tournament: string | null;    
  id_cat_branch: string | null;    
  teamList: teamList[] = [];

  constructor(public dialog: MatDialog, private router: Router, private _snackBar: MatSnackBar, private _router: ActivatedRoute, private APIcreate: ServiceService) {
    this.id_tournament = this._router.snapshot.paramMap.get("tournament");
    this.id_cat_branch = this._router.snapshot.paramMap.get("id");

    this.APIcreate.getTeams(String(this.id_tournament), String(this.id_cat_branch)).subscribe(data => {
        this.teamList = data;
    })
   }

  name: string | null = null;
  player: string = "";
  Curp: string = "";
  nplayer: number | null = null;

  value:string ="";
  valuenum: number | any;

  //arrego a mostrar el group 
  ArrayPlayers: string []= [];
  Arrplayers: player [] = [];

  ngOnInit(): void {    
  }  

//nombre del equipo
  onChangeNameTeam(data: string){
    this.name = data;  
  }

  onChangeNamePlayer(data: string){
    this.player = data;  
  }

  onChangeCurp(data: string){    
    if(data.trim().length !== 18 ){      
      this.showSnackbar('Error la Curp debe de tener 18 caracteres',1)      
    }else{
      this.Curp = data;
      //console.log(this.Curp)       
    }    
  }

  onChangeNumberPlayer(data: number){
    if( data < 1 || data == null ){                        
      this.showSnackbar('Error numero invalido!!',1)                        
    }else{    
      this.nplayer = data
      //console.log(this.nplayer)      
    }     
  }

  
  //cagadero pa la image
  myimage!: Observable<any>;
  base64code!: any;
  imgeSend : string = "";

  obtenerImage = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    //console.log(file);
    this.convertToBase64(file)

  };

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
 
    observable.subscribe((d) => {
      //console.log(d);
      this.myimage = d;
      this.base64code = d;

      this.imgeSend = String(this.base64code);
      //console.log(this.imgeSend);
      this.imgeSend = this.imgeSend.split(',')[1];            
      //console.log(this.imgeSend);
    })
  }
 
  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
 
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };

    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
    
  AddPlayer(){    
    if(this.player.trim() == "" || this.nplayer == null || this.Curp.trim() == "" || this.Curp == null || this.Curp.length !== 18 ){        
      this.showSnackbar('Error Faltan datos verifique!!',1)                  
    }else{   
      
      if(this.Arrplayers.length == 0 ){

        this.Arrplayers.push({name: this.player, curp: this.Curp, playerNumber: this.nplayer })
        this.ArrayPlayers.push(this.player+"-"+this.nplayer);
        this.player= "";
        this.nplayer = 0;
        this.Curp = "";
      }else{

        var band: boolean = false;

        this.Arrplayers.forEach(result =>{
            if(result.playerNumber == this.nplayer){
              band = true;
            }            
        })

        if(band){          
          this.showSnackbar('Error numero de jugador en uso',1)                                
        }else{
          this.Arrplayers.push({name: this.player, curp: this.Curp, playerNumber: this.nplayer })
          this.ArrayPlayers.push(this.player+"-"+this.nplayer);
          this.player= "";
          //this.nplayer = 0;
          this.Curp = "";
          this.value =" ";
        }
      }
      


      
      //this.value= " ";
    }
  }

  pos : number = 0;
  nameplayer:string = ""
  DeletePlayer(data: string){    

    //this.nameplayer = data.substring(0, data.length-2);
    this.nameplayer = data.split('-')[0];
    //console.log(this.nameplayer);          

    this.pos = this.ArrayPlayers.indexOf(data);            
    this.ArrayPlayers.splice(this.pos, 1);    
    this.Arrplayers.splice(this.pos, 1);            
  }

  register(){

    if(this.imgeSend == "" ||this.name == null || this.name.trim() == "" || this.id_cat_branch == null || this.id_tournament == null || this.Arrplayers.length < 5){            
      this.showSnackbar('Error Faltan Datos',1);            
    }else{
      
      if(this.id_cat_branch != null && this.id_tournament !== null){

        const datasend : team = {
          name: this.name,
          categoryId: this.id_cat_branch,
          players: this.Arrplayers,
          image: this.imgeSend,
        };
          
        //console.table(datasend);
        console.log(datasend);
  
        const dialogRef = this.dialog.open(DialogCancelComponent, {
          width: '420px',
          height: '200px',
          data: { name: 'Registrando equipo y jugadores,', subname: '¿Deseas Continuar?'},
        });
    
        dialogRef.afterClosed().subscribe(result => {
          //console.log(`Dialog result: ${result}`);
            if ( result == true){                          
  
              //mandar a llamar y en el subcribe poner el snabar verde y regresar a categorias 
              this.APIcreate.createTeam(datasend, String(this.id_tournament)).subscribe(result =>{
                this.showSnackbar('Equipo registrado exitosamente',2);  
                this.router.navigate(["trainer/tournament/"+this.id_tournament+"/categories"]);                        
              });                 
            }
        });
      }      
    }        
  }

  showSnackbar(nombre: string, tipo: number){
    if(tipo == 1){      
      this._snackBar.open(nombre, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',                  
        panelClass: ['red-snackbar'],
        duration: 3000,        
      });      

    }else{

      this._snackBar.open(nombre, 'X', {
        horizontalPosition: 'right',
        verticalPosition: 'top',                  
        panelClass: ['green-snackbar'],        
      });      

    }    
  }
  
}
