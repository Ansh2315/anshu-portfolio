import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class PagesModule { }
