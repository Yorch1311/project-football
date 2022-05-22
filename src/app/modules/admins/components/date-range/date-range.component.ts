import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { date_crate_edit } from '../../services/type';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent implements OnInit {
  
  @Input() nombre: string = 'sin nombre';
  @Input() value: String = "";
  @Input() valuef: String = "";

  //se envia 
  @Output() onChange = new EventEmitter<date_crate_edit>();        

  valstart : Date =  new Date(this.value+"");
  valend: Date =  new Date(""+this.valuef);

  constructor() { }

  data: date_crate_edit= {init: "", final:""};

  obtenerFechas(start:string, end:string){
    //alert(start);  
    this.data= {init:start, final: end};
    this.onChange.emit(this.data);   
 }

  ngOnInit(): void {
  }

}
