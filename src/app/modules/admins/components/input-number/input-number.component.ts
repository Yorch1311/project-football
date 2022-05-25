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
  @Output() onChange = new EventEmitter<number>();

  constructor() { }

  obtenerdato( data: string){
    this.onChange.emit(parseInt(data));
  }

  ngOnInit(): void {
  }

}
