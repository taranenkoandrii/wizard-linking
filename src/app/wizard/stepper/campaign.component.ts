import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class campaignComponent implements OnInit {
  activeStep = 0;
  steps = 4;

  stepperForm = this.fb.group({
   basicInfo: this.fb.group({
   }),
    contracts: this.fb.group({}),
    permissions: this.fb.group({}),
    preview: this.fb.group({}),
  });

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  changeStep(number: number): void {
    const activeForm = Object.keys(this.stepperForm.controls)[this.activeStep];
    if (this.stepperForm.get(activeForm)?.valid) {
      this.activeStep += number;
    }
  }

  getFormGroup(formControlName: string) {
    return this.stepperForm.get(formControlName) as FormGroup;
  }
}
