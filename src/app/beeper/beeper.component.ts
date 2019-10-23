import { Component, OnInit, OnDestroy } from '@angular/core';
import { IntervalBeeperService } from '../interval-beeper.service';
import { tap, takeUntil, withLatestFrom, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-beeper',
  templateUrl: './beeper.component.html',
  styleUrls: ['./beeper.component.css']
})
export class BeeperComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject();

  intervalId: NodeJS.Timer;
  beep: HTMLAudioElement;
  constructor(private intervalBeeperService: IntervalBeeperService) { }

  /**
   * Setup audio and beeper
   * * setup audio to play
   * * clear any interval if any
   * * setup automatic unsubscribe
   * * setup interval to play sound
   */
  ngOnInit() {
    this.beep = new Audio('/assets/beep.mp3');
    this.beep.play();
    this.intervalBeeperService.state$.pipe(
      tap(() => this.clearInterval()),
      takeUntil(this.onDestroy$),
      map(state => state.intervalMilliseconds)
    ).subscribe(this.setupIntervalBeep.bind(this));
  }
  /**
   * Clear observables and intervals
   */
  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
    this.onDestroy$.unsubscribe();
    this.clearInterval();
  }

  /**
   * clear interval
   */
  private clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
  /**
   * setup seconds interval of beep
   * @param interval interval in seconds to set to interval state.
   */
  private setupIntervalBeep(interval: number) {
    this.intervalId = setInterval(() => {
      this.beep.play();
    }, interval);
  }

}
