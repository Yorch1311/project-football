import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-cancel',
  templateUrl: './dialog-cancel.component.html',
  styleUrls: ['./dialog-cancel.component.scss']
})
export class DialogCancelComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string, subname: string}) { }

  ngOnInit(): void {
  }

}
