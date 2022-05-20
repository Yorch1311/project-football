import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  availableTeams: {teamName: string}[] = [{teamName: 'America'},{teamName: 'Chivas'},{teamName: 'Rayados'},{teamName: 'Tigres'}]
  teamsToPlay: {teamName: string}[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  onDropped(event: CdkDragDrop<{teamName: string}[]>) {

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
      return this.teamsToPlay[id-1].teamName
    }
    return this.teamsToPlay[id+1].teamName

  }
}

