import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  @Output() onClick = new EventEmitter<number>();
  @Input() texto: string;
  @Input() class: string;
  @Input() id: number;

  constructor() {
    this.texto = ""
    this.class = ""
    this.id = 0
  }

  ngOnInit(): void {
  }

  handleOnClick() {
    //envia la id del chip
    this.onClick.emit(this.id);
  }
}
