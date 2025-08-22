import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedServiceService } from "../services/shared-service.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  public list = [
    { label: 'HEADER.HOME', value: 'home' },
    { label: 'HEADER.SKILLS', value: 'skills' },
    { label: 'HEADER.EXPERIENCE', value: 'experience' },
    { label: 'HEADER.ELEMENTS', value: 'elements' }
  ]

  public activeMenu: string = 'home';

  constructor(private _sharedService: SharedServiceService, public translate: TranslateService) { }

  ngOnInit(): void {
  }

  onHeaderContent = (event: any) => {
    try {
      this.activeMenu = event;
      this._sharedService.headerSubject.next({ value: this.activeMenu })
    } catch (error) {
      console.error(error);
    }
  }

}
