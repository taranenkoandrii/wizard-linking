import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-basic-info-step',
  templateUrl: './basic-info-step.component.html',
  styleUrls: ['./basic-info-step.component.scss']
})
export class BasicInfoStepComponent implements OnInit {
  @Input() basicInfoForm: FormGroup = new FormGroup({});
  networks = [
    { label: 'Youtube', value: 'youtube'},
    { label: 'Google Apps', value: 'googleApps'},
    { label: 'DV360 Ads', value: 'dvAds'},
    { label: 'AdForm Ads', value: 'adForm'},
    { label: 'Facebook', value: 'facebook'},
    { label: 'Instagram', value: 'instagram'},
    { label: 'TikTok', value: 'tiktok'},
  ];
  email: any;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.basicInfoForm.addControl('name', new FormControl(null, Validators.required));
    this.basicInfoForm.addControl('network', new FormControl(null));
    this.basicInfoForm.addControl('account', new FormControl(null, ));
    this.basicInfoForm.addControl('budget', new FormControl(null, Validators.pattern(/^-?(0|[1-9]\d*)?$/)));
    this.basicInfoForm.addControl('currency', new FormControl('USD'));
    this.basicInfoForm.addControl('emails', this.fb.array([]));
  }

  getEmails() : FormArray {
    return this.basicInfoForm.controls['emails'] as FormArray;
  }

  addEmail() : void {
    (<FormArray>this.basicInfoForm.controls['emails']).push(new FormControl(this.email, [Validators.required, Validators.email]));
    this.email = '';
  }

  chooseNetwork(item: { label: string; value: string }): void {
    this.basicInfoForm.controls['network'].setValue(item.value);
  }

  isCurrentNetwork(item: { label: string; value: string }): boolean {
    return this.basicInfoForm.get('network')?.value === item.value;
  }
}
