import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedServiceService} from "../../services/shared-service.service";
import {Subscription} from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public activeMenu: string = 'home';
  public headerSubscription: Subscription = new Subscription();

  constructor(private _sharedService: SharedServiceService, public _route: Router) {
    this.headerSubscription = this._sharedService.headerSubject.subscribe((resp) => {
      if(resp?.value) {
        this.activeMenu = resp.value;
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.headerSubscription) {
      this.headerSubscription.unsubscribe()
    }
  }

}
