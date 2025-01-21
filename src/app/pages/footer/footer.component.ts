import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public eForm: any;

  get f() {
    return this.eForm.controls;
  }

  constructor() { }

  ngOnInit(): void {
    this.activateFormValidation();
  }

  activateFormValidation = () => {
    try {
      let requiredFields = ['name', 'email', 'message'];
      this.eForm = new FormGroup({
        name: new FormControl(this.eForm.name, [Validators.required])
      })
    } catch (error) {
      console.error(error);
    }
  }

}
