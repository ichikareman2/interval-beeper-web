import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { BeeperComponent } from './beeper.component';

describe('BeeperComponent', () => {
  let component: BeeperComponent;
  let fixture: ComponentFixture<BeeperComponent>;
  // let mockIntervalBeeperService: { state$}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
