import { Component, OnInit } from '@angular/core';
import { DialogSaveComponent } from 'src/app/shared/components/dialog-save/dialog-save.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-tournament-create-tree',
  templateUrl: './tournament-create-tree.component.html',
  styleUrls: ['./tournament-create-tree.component.scss']
})
export class TournamentCreateTreeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  save() {              
    const dialogRef = this.dialog.open(DialogSaveComponent, {

      width: '400px',
      height: '200px',                
    });   
    
          
  }
}
