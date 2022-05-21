import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../../services/type';

@Component({
  selector: 'app-select-simple',
  templateUrl: './select-simple.component.html',
  styleUrls: ['./select-simple.component.scss']
})
export class SelectSimpleComponent implements OnInit {

  @Input() nombre: string = 'sin nombre'; 
  @Input() items: Item[] = []; 
  @Input() valuenum: number = 0;

  valor: number | undefined;
  //se envia 
  @Output() onChange = new EventEmitter<number>();    

  constructor() { }

  obtenerdato( data: number){
    //console.log(data);        
    this.onChange.emit(data);
  }

  ngOnInit(): void {
    this.valor = this.valuenum;
  }

}
