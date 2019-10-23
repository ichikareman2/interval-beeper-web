import { TestBed } from '@angular/core/testing';
import 'jasmine';
import { IntervalBeeperService } from './interval-beeper.service';

describe('IntervalBeeperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntervalBeeperService = TestBed.get(IntervalBeeperService);
    expect(service).toBeTruthy();
  });
});
