import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter();
  @Input() title: string;
  @Input() disable: boolean;
  @Input() clase: string;
  users = [];

  constructor() {
    this.title = "";
    this.disable = false;
    this.clase = ""
  }

  ngOnInit(): void {
  }

  handleOnClick() {
    this.onClick.emit();
  }
}
