import { Component, OnInit } from '@angular/core';
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

  public languages = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Spanish', value: 'es' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Hindi', value: 'hi' }
  ];

  public activeMenu: string = 'home';
  public selectedLang: String = 'en';

  constructor(private _sharedService: SharedServiceService, public translate: TranslateService) { }

  ngOnInit(): void {
  }

  onLangChange = (lang: any) => {
    try {
      if (lang) {
        this.translate.use(lang);
      }
    } catch (error) {
      console.error(error);

    }
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
