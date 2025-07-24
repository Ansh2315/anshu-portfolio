import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenResolutionService } from 'src/app/services/screen-resolution.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Output() sidebarEmitter = new EventEmitter();
  @Input() isCollapse: any;

  public item = [
    {
      label: 'Echart',
      value: 'echart',
      icon: './assets/element-icon/chart-icon.png'
    },
    {
      label: 'AgGrid',
      value: 'aggrid',
      icon: './assets/element-icon/table-icon.png'
    },
    {
      label: 'Angular Tree',
      value: 'tree_component',
      icon: './assets/element-icon/tree-icon.png'
    },
    {
      label: 'CdkDragDrop',
      value: 'drag_drop',
      icon: './assets/element-icon/drag-drop.png'
    },
    {
      label: 'NgRx (State Management)',
      value: 'ngrx',
      icon: './assets/element-icon/redux-icon.png'
    }
  ]
  public selectedItem: string = 'echart';
  public deviceType: string | null = '';

  constructor(public screenResService: ScreenResolutionService) {
    this.deviceType = this.screenResService.getDeviceType();
  }

  ngOnInit(): void {
  }

  onItemClick = (value: any) => {
    try {
      this.selectedItem = value;
      this.sidebarEmitter.emit({ type: 'tab', value: this.selectedItem });
    } catch (error) {
      console.error(error);
    }
  }

  collapseSidebar = () => {
    try {
      this.isCollapse = !this.isCollapse;
      this.sidebarEmitter.emit({ type: 'sidebar', value: this.isCollapse });
    } catch (error) {
      console.error(error);
    }
  }

}
