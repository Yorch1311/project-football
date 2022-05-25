import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() teamName: string = "";
  @Input() opponent: string = "";
  @Input() id: string = "";
  @Input() path: String | undefined = "";

  constructor() { }

  ngOnInit(): void {
  }

}
