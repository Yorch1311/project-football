import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  admin: string | undefined;
  referee: string | undefined;
  coach: string | undefined;

  constructor(private location: Location) { 

    if(this.location.path().includes("admin")){
      this.admin = "assets/image/icons/icons8-trofeo-48 2.png";
      this.coach = "assets/image/icons/icons8-el-entrenador-lleno-48 1.png";
      this.referee = "assets/image/icons/icons8-árbitro-48 1.png";

    }else if(this.location.path().includes("trainer")){
      this.admin = "assets/image/icons/icons8-trofeo-48 1.png";
      this.coach = "assets/image/icons/icons8-el-entrenador-lleno-48 2.png";
      this.referee = "assets/image/icons/icons8-árbitro-48 1.png";


    }else if(this.location.path().includes("referee")){
      this.admin = "assets/image/icons/icons8-trofeo-48 1.png";
      this.coach = "assets/image/icons/icons8-el-entrenador-lleno-48 1.png";
      this.referee = "assets/image/icons/icons8-árbitro-48 1.png";

    }
  }

  ngOnInit(): void {

  }

}
