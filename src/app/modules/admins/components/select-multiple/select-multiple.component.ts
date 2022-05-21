import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../services/type';


@Component({
  selector: 'app-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss']
})
export class SelectMultipleComponent implements OnInit {

  @Input() nombre: string = 'sin nombre';
  @Input() items: Item[] = []; 
  
  //se envia 
  @Output() onChange = new EventEmitter<number[]>();

  selectedValue: number []=  [1,2];         

  constructor() { }
  
  obtenerdato( data: number[]){
    //console.log(data);    
    this.onChange.emit(data);
  }

  ngOnInit(): void {
  }

}