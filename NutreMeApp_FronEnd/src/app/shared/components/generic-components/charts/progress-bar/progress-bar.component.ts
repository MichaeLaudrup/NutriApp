import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() progressValue = 50;
  @Input() maxValue = 100;  
  @Input() withLabel = false; 

  displayValue: number; 
  @HostBinding('style.--actual-value') actualValue = '60%'; 
  constructor() { }

  ngOnInit(): void {
    this.progressValue = Math.trunc(this.progressValue); 
    this.actualValue = Math.trunc(((this.progressValue) * 100 / this.maxValue)) + '%'
  }

  ngOnChanges( changes: SimpleChanges): void {
    this.progressValue = Math.trunc(this.progressValue); 
    this.actualValue = Math.trunc(((this.progressValue) * 100 / this.maxValue)) + '%'
  }

}
