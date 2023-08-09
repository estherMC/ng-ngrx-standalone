import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe]
})
export class CounterOutputComponent {
  //Convenció: en els observables afegir $ final
  count$: Observable<number>;

  constructor(private store: Store<{counter: number}>){
    //La key s'extreu del app.module.ts del imports
    this.count$ = store.select('counter');
  }

  //Opció 2: fer servir serveis

  // counter = 0;
  // counterServiceSub?: Subscription;
  // constructor(private counterService: CounterService) {}

  // ngOnInit(): void {
  //   this.counterServiceSub = this.counterService.counterChanged.subscribe(
  //     (newVal) => (this.counter = newVal)
  //   );
  // }

  // ngOnDestroy(): void {
  //   if (this.counterServiceSub) {
  //     this.counterServiceSub.unsubscribe();
  //   }
  // }
}
