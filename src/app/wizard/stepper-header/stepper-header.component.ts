import { ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-header',
  templateUrl: './stepper-header.component.html',
  styleUrls: ['./stepper-header.component.scss']
})
export class StepperHeaderComponent implements OnInit, OnChanges {
  @Input() activeStep = 0;
  steps = 4;
  stepsArray = Array(this.steps).fill(null).map((_, i) => i);

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.cdr.detectChanges();
  }

}
