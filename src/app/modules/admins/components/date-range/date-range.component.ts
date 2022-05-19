import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent implements OnInit {
  
  @Input() nombre: string = 'sin nombre';
  @Input() value: string = "";

  //se envia 
  @Output() onChange = new EventEmitter<string>();        

  valstart : Date =  new Date("2022/02/16");
  valend: Date =  new Date("2022/06/16");

  constructor() { }

  obtenerFechas(start:string, end:string){
    //alert(start);  
    this.onChange.emit(start+"-"+end);   
 }

  ngOnInit(): void {
  }

}
