import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-explorer-tree',
  templateUrl: './explorer-tree.component.html',
  styleUrls: ['./explorer-tree.component.scss']
})
export class ExplorerTreeComponent implements OnInit {
  public nodes = [];
  public options = {
    displayField: 'name',
    isExpandedField: 'expanded',
  };

  constructor(public _sharedService: SharedServiceService) { }


  ngOnInit(): void {
    this.getTreeData();
  }

  getTreeData = () => {
    try {
      this._sharedService.getStateTreeData().subscribe((resp) => {
        if (resp) {
          this.nodes = resp?.nodes
        }
      })
    } catch (error) {
      console.error(error);
    }
  }

}
