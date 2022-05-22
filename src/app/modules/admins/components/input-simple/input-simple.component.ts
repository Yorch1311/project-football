import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-simple',
  templateUrl: './input-simple.component.html',
  styleUrls: ['./input-simple.component.scss']
})
export class InputSimpleComponent implements OnInit {

  @Input() nombre: string = 'sin nombre';
  @Input() ejemplo: string = 'sin nombre';  
  @Input() value: string = '';
  //se envia 
  @Output() onChange = new EventEmitter<string>(); 
  @Output() KeyUp = new EventEmitter<string>();    

  constructor() { }

  obtenerdato( data: string){         
    //console.log(data); 
    this.onChange.emit(data);        
  }

  ObtenerTextoPress(data: string){
    this.KeyUp.emit(data);
  }

  ngOnInit(): void {
  }

}
