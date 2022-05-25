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
  @Input() selectedValue: String []=[];
  @Input() enable: String | null = null;

  //se envia
  @Output() onChange = new EventEmitter<String[]>();


  constructor() { }

  obtenerdato( data: String[]){
    this.onChange.emit(data);
  }

  ngOnInit(): void {
  }

}
