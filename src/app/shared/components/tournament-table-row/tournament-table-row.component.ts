import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tournament-table-row',
  templateUrl: './tournament-table-row.component.html',
  styleUrls: ['./tournament-table-row.component.scss']
})
export class TournamentTableRowComponent implements OnInit {
  @Input() id: string = "";
  @Input() name: string = "";
  @Input() type: string = "";
  @Input() category: string = "";
  @Input() place: string = "";
  @Input() date: string = "";
  @Input() status: string = "";

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleEvent(){
    this.onClick.emit({
      id: this.id,
      status: this.status
    });
  }
}
