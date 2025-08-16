import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  public skills = [
    {
      label: 'Angular',
      level: 90,
      image: './assets/skill-icon/angular-icon.png',
      value: 'angular',
      sub_text: 'v12 v14'
    },
    {
      label: 'HTML',
      level: 90,
      image: './assets/skill-icon/html-icon.png',
      value: 'html'
    },
    {
      label: 'JavaScript',
      level: 90,
      image: './assets/skill-icon/js3s-icon.png',
      value: 'js'
    },
    {
      label: 'TypeScript',
      level: 90,
      image: './assets/skill-icon/ts.png',
      value: 'ts'
    },
    {
      label: 'RxJs',
      level: 90,
      image: './assets/skill-icon/rxjs-icon.svg',
      value: 'rxjs'
    },
    {
      label: 'NgRx',
      level: 90,
      image: './assets/skill-icon/ngrx-icon.svg',
      value: 'ngrx'
    },
    {
      label: 'SCSS',
      level: 90,
      image: './assets/skill-icon/css-icon.png',
      value: 'scss'
    },
    {
      label: 'React',
      level: 60,
      image: './assets/skill-icon/react-icon.svg',
      value: 'react'
    },
    {
      label: 'Node Js',
      level: 50,
      image: './assets/skill-icon/node-js-icon.png',
      value: 'node_js'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
