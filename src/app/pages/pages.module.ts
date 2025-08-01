import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillComponent } from './skill/skill.component';
import { ExperienceComponent } from './experience/experience.component';
import { ElementsComponent } from './elements/elements.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { EchartUiComponent } from './echart-ui/echart-ui.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { TreeModule } from '@circlon/angular-tree-component';
import { ExplorerTreeComponent } from './explorer-tree/explorer-tree.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReduxComponent } from './redux/redux.component';
import { counterReducer } from './ngrx/reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    HomeComponent,
    HomeMenuComponent,
    FooterComponent,
    SkillComponent,
    ExperienceComponent,
    ElementsComponent,
    SideBarComponent,
    EchartUiComponent,
    AgGridComponent,
    ExplorerTreeComponent,
    DragDropComponent,
    ReduxComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    FormsModule,
    AgGridModule,
    TreeModule,
    DragDropModule,
    AsyncPipe,
    ReactiveFormsModule,
    StoreModule.forRoot({ counter: counterReducer}),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class PagesModule { }
