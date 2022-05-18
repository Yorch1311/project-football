import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


interface Item{
  id: number;
  name: string;
}


@Component({
  selector: 'app-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss']
})
export class SelectMultipleComponent implements OnInit {

  @Input() nombre: string = 'sin nombre';
  @Input() items: Item[] = []; 
  
  //se envia 
  @Output() onChange = new EventEmitter<Item[]>();

  selectedValue: string | any;         

  constructor() { }
  
  obtenerdato( data: Item[]){
    //console.log(data);    
    this.onChange.emit(data);
  }

  ngOnInit(): void {
  }

}