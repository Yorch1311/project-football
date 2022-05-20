import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  @Output() onClick = new EventEmitter<string>();
  @Input() texto: string;
  @Input() class: string;
  @Input() id: string;

  constructor() {
    this.texto = ""
    this.class = ""
    this.id = ""
  }

  ngOnInit(): void {
  }

  handleOnClick() {
    //envia la id del chip
    this.onClick.emit(this.id);
  }
}
