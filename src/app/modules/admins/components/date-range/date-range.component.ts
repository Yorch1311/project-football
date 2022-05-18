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

  valstart : string ='';
  valend:string = '';

  constructor() { }

  obtenerFechas(start:string, end:string){
    //alert(start);  
    this.onChange.emit(start+"-"+end);   
 }

  ngOnInit(): void {
  }

}
