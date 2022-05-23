import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  
  @Input() nombre: string = 'sin nombre';
  @Input() ejemplo: string = 'sin nombre';  
  //@Input() value: number = 1;
  //se envia 
  @Output() onChange = new EventEmitter<string>(); 

  constructor() { }

  obtenerdato( data: string){         
    //console.log(data); 
    this.onChange.emit(data);        
  }

  ngOnInit(): void {
  }

}
