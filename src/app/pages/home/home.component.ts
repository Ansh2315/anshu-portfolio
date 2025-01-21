import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public activeMenu: string = 'home'

  constructor() { }

  ngOnInit(): void {
  }

  menuValue = (event: any) => {
    try {
      this.activeMenu = event;
    } catch (error) {
      console.error(error);
      
    }
  }

}
