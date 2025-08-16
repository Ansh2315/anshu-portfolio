import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-explorer-tree',
  templateUrl: './explorer-tree.component.html',
  styleUrls: ['./explorer-tree.component.scss']
})
export class ExplorerTreeComponent implements OnInit, OnDestroy {
  public nodes = [];
  public options = {
    displayField: 'name',
    isExpandedField: 'expanded',
  };
  public destroy$: Subject<any> = new Subject();

  constructor(public _sharedService: SharedServiceService) { }


  ngOnInit(): void {
    this.getTreeData();
  }

  getTreeData = () => {
    try {
      this._sharedService.getStateTreeData().pipe(takeUntil(this.destroy$)).subscribe((resp) => {
        if (resp?.status === 'success') {
          this.nodes = resp.data?.nodes || [];
        }
      })
    } catch (error) {
      console.error(error);
    }
  }

  ngOnDestroy() {
    this.destroy$.next(0);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

}
