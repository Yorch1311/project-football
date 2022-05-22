import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Item } from '../../../modules/admins/services/type';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {

  @Input() nombre: string = 'sin nombre'; 
  @Input() items: Item[] = []; 
  selectedValue: number | undefined;   

  //se envia 
  @Output() onChange = new EventEmitter<Item>();

  constructor(private _snackBar: MatSnackBar  ) { }


  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
 
  Getitem(valac: Item){   

    if(!valac){

      this._snackBar.open('Error no selecciona una opcion', '', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,         
        //panelClass: ['green-snackbar'],
        panelClass: ['red-snackbar'],
        duration: 3000,                   
      });

    }else{
      this.onChange.emit(valac);   
      this.selectedValue = 0;
    }    
      //console.log(valac);      
  }

  ngOnInit(): void {
  }

}
