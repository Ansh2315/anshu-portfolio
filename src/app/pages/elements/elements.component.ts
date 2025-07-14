import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  public activeMenu: string = 'echart';
  public isCollapse: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


  emittedValue = (event: any) => {
    try {
      if (event) {
        switch (event.type) {
          case 'tab':
            this.activeMenu = event.value;
            break;
          case 'sidebar':
            this.isCollapse = event.value;
            break;
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
}
