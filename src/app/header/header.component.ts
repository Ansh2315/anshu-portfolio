import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {SharedServiceService} from "../services/shared-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  public list = [
    {
      label: 'Home',
      value: 'home'
    },
    {
      label: 'Skills',
      value: 'skills'
    },
    {
      label: 'Experience',
      value: 'experience'
    },
    {
      label: 'UI Elements',
      value: 'elements'
    }
  ]

  public activeMenu: string = 'home';

  constructor(private _sharedService: SharedServiceService) { }

  ngOnInit(): void {
  }

  onHeaderContent = (event: any) => {
    try {
      this.activeMenu = event;
      this._sharedService.headerSubject.next({value: this.activeMenu})
    } catch (error) {
      console.error(error);
    }
  }

}
