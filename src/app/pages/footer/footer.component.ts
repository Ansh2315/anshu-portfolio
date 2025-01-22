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

  constructor() {}

  ngOnInit(): void {
    this.activateFormValidation();
  }

  activateFormValidation = () => {
    try {
      let validateObject: any = {};
      let requiredFields = ['name', 'email', 'message'];
      for (const element of requiredFields) {
        validateObject[element] = new FormControl({ value: null, disabled: false }, [Validators.required]);
      }
      this.eForm = new FormGroup(validateObject);
    } catch (error) {
      console.error(error);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    try {
      formGroup.markAsTouched();
      formGroup.updateValueAndValidity();
      (<any>Object).values(formGroup.controls).forEach(
        (control: any) => {
          control.markAsTouched();
          control.markAsDirty({ onlySelf: true });
          control.updateValueAndValidity({ onlySelf: false, emitEvent: true });
          if (control.controls) {
            this.validateAllFormFields(control);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }

  sendMail = () => {
    try {
      if(this.eForm.invalid) {
        this.validateAllFormFields(this.eForm);
      }
    } catch (error) {
      console.error(error);
      
    }
  }

}
