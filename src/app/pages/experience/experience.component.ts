import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public expData = [
    {
      label: 'Converted most custom-built tables to AG Grid, significantly enhancing user experience and improving performance by 50%.'
    },
    {
      label: 'Implemented an MQTT-based live notification system for real-time equipment alerts, enabling faster fault detection and reducing accident risks by 40%.'
    },
    {
      label: 'Migrated a large-scale Angular project to Nx monorepo architecture for better scalability, reducing core code dependency and bug rates by 60%.'
    },
    {
      label: 'Worked extensively with RxJS to manage asynchronous data streams, improving application responsiveness and overall maintainability.'
    },
    {
      label: 'Led the integration of the Flourish theme using SCSS, transforming the platform’s UI and improving user engagement, resulting in a 15% reduction in bounce rate.'
    },
    {
      label: 'Developed reusable Angular components such as AG Grid tables, date pickers, custom forms, and charts, reducing development time for other teams by 80%.'
    },
    {
      label: 'Followed Agile methodologies with sprint-based development cycles, ensuring timely delivery, continuous improvement, and close collaboration with cross-functional teams.'
    },
    {
      label: 'Resolved major bugs and reduced SonarQube issues by 80%, leading to higher code quality and better maintainability.'
    },
    {
      label: 'Integrated i18n for multi-language support, accelerating global expansion and driving 50% growth impact.'
    },
    {
      label: 'Utilized key Angular libraries such as ngx-infinite-scroll, google-maps, ngx-monaco-editor, angular-formio, circlon/tree, cytoscape and more to build robust, feature-rich interfaces'
    },
    {
      label: 'Applied Cypress for end-to-end UI testing, ensuring application reliability and maintaining high-quality releases.'
    },
    {
      label: 'Mentored interns on core front-end concepts, contributing to team growth, effective onboarding, and a culture of knowledge sharing.'
    }
  ]

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

  constructor() { }

  ngOnInit(): void {
  }

}
