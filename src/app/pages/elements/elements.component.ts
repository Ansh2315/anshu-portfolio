import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  public activeMenu: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  emittedValue = (event: any) => {
    try {
      if (event) {
        this.activeMenu = event;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
