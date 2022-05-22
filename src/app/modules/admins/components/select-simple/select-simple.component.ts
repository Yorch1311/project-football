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
  @Input() valuenum: String = '';
  @Input() enable: String | null = null;
  
  valor: String='';
  //se envia 
  @Output() onChange = new EventEmitter<String>();    

  constructor() { }

  obtenerdato( data: String){
    //console.log(data);    
    this.onChange.emit(data);
  }

  ngOnInit(): void {
    if(this.valuenum !== ""){
      this.valor = this.valuenum;
    }    
  }

}
