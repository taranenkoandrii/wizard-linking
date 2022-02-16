import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard.component';
import { campaignComponent } from './stepper/campaign.component';
import { BasicInfoStepComponent } from './basic-info-step/basic-info-step.component';
import { StepperHeaderComponent } from './stepper-header/stepper-header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    WizardComponent,
    campaignComponent,
    BasicInfoStepComponent,
    StepperHeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WizardModule { }
