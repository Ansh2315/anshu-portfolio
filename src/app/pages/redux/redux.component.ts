import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { add, reset, subtract } from '../ngrx/actions';
import { StoreState } from '../ngrx/global-store';
import { Observable, take } from 'rxjs';
import { selectCount } from '../ngrx/selector';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.scss']
})


export class ReduxComponent implements OnInit {

  public count: Observable<number>;

  constructor(public store: Store<StoreState>) {
    this.count = this.store.select(selectCount)
  }

  ngOnInit(): void {
  }

  addCounter() {
    this.store.dispatch(add());
  }

  reset() {
    this.store.dispatch(reset());
  }

  subCounter() {
    this.store.select(selectCount).pipe(take(1)).subscribe((resp) => {
      if (resp > 0) {
        this.store.dispatch(subtract());
      }
    })
  }

  ngOnDestroy() {
  this.store.dispatch(reset());
}
}
