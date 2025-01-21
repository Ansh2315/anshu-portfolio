import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuEmitter: EventEmitter<any> = new EventEmitter();

  public list = [
    {
      label: 'Home',
      value: 'home'
    },
    {
      label: 'About',
      value: 'about'
    },
    {
      label: 'Pages',
      value: 'pages'
    },
    {
      label: 'Contact',
      value: 'contact'
    }
  ]

  public activeMenu: string = 'home';

  constructor() { }

  ngOnInit(): void {
  }

  onHeaderContent = (event: any) => {
    try {
      this.activeMenu = event;
      this.menuEmitter.emit(this.activeMenu);
    } catch (error) {
      console.error(error);
    }
  }

}
