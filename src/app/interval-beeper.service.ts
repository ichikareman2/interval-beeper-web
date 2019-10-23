import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import {IntervalBeeper, createDefault, setInterval as setBeeperInterval} from 'interval-beeper';

@Injectable({
  providedIn: 'root'
})
export class IntervalBeeperService {

  private stateSubject = new BehaviorSubject<IntervalBeeper>(createDefault());
  public state$ = this.stateSubject.asObservable();

  constructor() { }

  /**
   * set interval in state object
   * @param seconds seconds between beeps
   */
  setBeeperInterval(seconds: number) {
    this.state$.pipe(
      take(1),
      map(state => setBeeperInterval(state, seconds))
    ).subscribe(state => this.stateSubject.next(state));
  }
}
