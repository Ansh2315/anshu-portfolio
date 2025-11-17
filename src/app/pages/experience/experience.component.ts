import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public expData: any = [];

  public projectData = [
    {
      title: "Energy Manager",
      info: [
        {
          label: 'Developed an industrial energy monitoring app using rich visualizations (bar, line, donut charts) to track usage, costs, and emissions—enabling real-time fault detection and performance insights'
        },
        {
          label: 'Enabled users to optimize energy efficiency by 70%, reduce CO₂ emissions by 40%, and lower production costs by 30%, driving substantial gains in operational performance and sustainability'
        }
      ]
    },
    {
      title: "Process Analytics",
      info: [
        {
          label: 'Developed an app to monitor and visualize alarms from industrial machines using charts and detailed reports for comprehensive analysis'
        },
        {
          label: 'Enabled quick fault detection, reduced manual equipment checks, and minimized industrial accident risk by 90%.'
        }
      ]
    },
    {
      title: "Global Catalogue",
      info: [
        {
          label: 'Developed a catalog-style app that showcases published Dashboards, Apps, Logbooks, and Plugins with detailed descriptions and screenshots for easy exploration'
        },
        {
          label: 'Helped new clients quickly understand the product capabilities through interactive dashboards and custom app, providing instant insight into key features'
        }
      ]
    }
  ]
  public destroy$: Subject<any> = new Subject();

  constructor(public _appService: SharedServiceService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.getExpInfo();
  }

  getExpInfo = () => {
    try {
      this._appService.getExpData().pipe(takeUntil(this.destroy$)).subscribe((resp: any) => {
        if (resp?.status === 'success') {
          this.expData = resp.data || [];
        }
      })
    } catch (error) {
      console.error(error);
    }
  }

}
