import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Output() sidebarEmitter = new EventEmitter();

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
    }
  ]
  public selectedItem: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onItemClick = (value: any) => {
    try {
      this.selectedItem = value;
      this.sidebarEmitter.emit(this.selectedItem);
    } catch (error) {
      console.error(error);
    }
  }

}
