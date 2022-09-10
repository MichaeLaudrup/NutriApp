import { AfterContentChecked, AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'radial-chart',
  templateUrl: './radial-chart.component.html',
  styleUrls: ['./radial-chart.component.scss']
})
export class RadialChartComponent implements OnInit, OnDestroy{
  @ViewChild('container', {static:true}) container: ElementRef<HTMLDivElement>; 
  height: number = 0;  
  @Input() value; 
  @Input() label = 'Carbohidratos'
  @Input() units = 'gr';
  @Input() firstColor = 'var(--c2)'; 
  @Input() secondColor = 'var(--c5)'; 
  actualDegree = 50; 
  private destroySuscriptions$: Subject<any> = new Subject()
  
  constructor() { }

  ngOnInit(): void {
    this.actualDegree= (+this.value * 360 / 75);
    this.height = this.container.nativeElement.offsetWidth; 
  }
  ngOnDestroy(): void {
    this.destroySuscriptions$.next({})
     this.destroySuscriptions$.unsubscribe()
  }
  updateHeight(){
    this.height = this.container.nativeElement.offsetWidth;
  }



}
