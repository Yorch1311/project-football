import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Item {
  id: number;
  name: string;  
}

@Component({
  selector: 'app-group-show',
  templateUrl: './group-show.component.html',
  styleUrls: ['./group-show.component.scss']
})
export class GroupShowComponent implements OnInit {

  @Input() items: String[] = [];   
  //se envia 
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  DeleteAd(valac: string){                  
    this.onChange.emit(valac);
    //console.log(valac);    
  }

  ngOnInit(): void {
  }

}
