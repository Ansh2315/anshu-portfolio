import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount } from '../ngrx/selector';
import { StoreState } from '../ngrx/global-store';

@Component({
  selector: 'app-redux-example',
  templateUrl: './redux-example.component.html',
  styleUrls: ['./redux-example.component.scss']
})
export class ReduxExampleComponent implements OnInit {

  public count: Observable<number>;

  constructor(public store: Store<StoreState>) {
    this.count = this.store.select(selectCount);
  }

  ngOnInit(): void {

  }

}
