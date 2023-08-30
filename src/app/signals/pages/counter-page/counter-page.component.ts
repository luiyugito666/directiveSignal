import { Component, computed, signal } from '@angular/core';




@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {



  public counter = signal(10);
  //crearemos una propiedad de solo lectura con computed
  public squareCounter=computed(()=>this.counter()*this.counter())

  byIncresed(value: number) { 
    
    this.counter.update(current=>current+value)

  }

}
