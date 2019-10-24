import { TestBed } from '@angular/core/testing';
import 'jasmine';
import { IntervalBeeperService } from './interval-beeper.service';

describe('IntervalBeeperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntervalBeeperService = TestBed.get(IntervalBeeperService);
    expect(service).toBeTruthy();
  });

  it('should set interval', (done: DoneFn) => {
    const service: IntervalBeeperService = TestBed.get(IntervalBeeperService);
    const newIntervalSeconds = 4;
    service.setBeeperInterval(newIntervalSeconds);
    service.state$.subscribe(state => {
      expect(state.intervalMilliseconds).toEqual(newIntervalSeconds * 1000);
      done();
    });
  });
});
