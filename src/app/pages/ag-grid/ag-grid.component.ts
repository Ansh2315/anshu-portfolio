import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {

  constructor(public _appService: SharedServiceService) { }

  public gridOption = {
    rowData: [],
    columnDefs: [],
    defaultColDef: {
      flex: 1,
      resizable: true
    },
    statusBar: {
      statusPanels: [
        {
          statusPanel: 'agTotalRowCountComponent',
          align: 'left'
        }
      ]
    }

  }

  public destroy$: Subject<any> = new Subject();

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData = () => {
    try {
      this._appService.getAgGridData().pipe(takeUntil(this.destroy$)).subscribe((resp) => {
        if (resp?.status === 'success') {
          this.gridOption.rowData = resp.data?.bodyContent || [];
          this.gridOption.columnDefs = resp.data?.headerContent || [];
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
