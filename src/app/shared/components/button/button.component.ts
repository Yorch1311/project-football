import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter();
  @Input() title: string;
  @Input() clase: string;
  @Input() disable: boolean;
  users = [];

  constructor() {
    this.title = "";
    this.clase = ""
    this.disable = false;
  }

  ngOnInit(): void {

    if(this.disable){
      this.clase += " disable";
    }
  }

  handleOnClick() {
    if(!this.disable){
      this.onClick.emit();
    }
  }
}
