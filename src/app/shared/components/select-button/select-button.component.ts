import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Item } from '../../../modules/admins/services/type';

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

  constructor() { }

  Getitem(valac: Item){   

    if(!valac){
      alert("Error no selecciono ningun ninguna opcion");    
    }else{
      this.onChange.emit(valac);   
    }    
      //console.log(valac);      
  }

  ngOnInit(): void {
  }

}
