import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-simple',
  templateUrl: './input-simple.component.html',
  styleUrls: ['./input-simple.component.scss']
})
export class InputSimpleComponent implements OnInit {

  @Input() nombre: string = 'sin nombre';
  @Input() ejemplo: string = 'sin nombre';  
  @Input() value: String = '';
  //se envia 
  @Output() onChange = new EventEmitter<String>();     

  constructor() { }

  obtenerdato( data: String){         
    console.log(data); 
    this.onChange.emit(data);        
  }

  ngOnInit(): void {
  }

}
