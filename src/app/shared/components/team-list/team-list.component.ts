import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Team } from 'src/app/modules/admins/services/type';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {


  @Input() teamList: Team[] = [];
  @Output() sendTeamList = new EventEmitter();

  teamsToPlay: Team[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.teamList)
  }


  onDropped(event: CdkDragDrop<Team[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    this.sendTeamList.emit(this.teamsToPlay);
    //console.log(event.container)
    if(event.container.id === 'teamsToPlay'){
      console.log(this.teamsToPlay)
    }
  }

  getOpponent(id: number) {
    const isEven = id % 2 === 0;

    if(id+1 === this.teamsToPlay.length && isEven){
      return "Esperando oponente..."
    }
    if(!isEven){
      return this.teamsToPlay[id-1].name
    }
    return this.teamsToPlay[id+1].name

  }
}

