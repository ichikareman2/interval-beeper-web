import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeperSettingsComponent } from './beeper-settings.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IntervalBeeperService } from '../interval-beeper.service';
import { Observable, Subject } from 'rxjs';
import { IntervalBeeper } from 'interval-beeper';

describe('BeeperSettingsComponent', () => {
  let component: BeeperSettingsComponent;
  let fixture: ComponentFixture<BeeperSettingsComponent>;
  let mockRouter: { navigate: jasmine.Spy };
  let mockIntervalBeeperService: { setBeeperInterval: jasmine.Spy, state$: Observable<IntervalBeeper> };
  // const fb = new FormBuilder();

  beforeEach(async(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockIntervalBeeperService = jasmine.createSpyObj('IntervalBeeperService', ['setBeeperInterval', 'state$']);
    mockIntervalBeeperService.state$ = new Subject();

    TestBed.configureTestingModule({
      declarations: [ BeeperSettingsComponent ],
      imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        // { provide: FormBuilder, useValue: fb }
        { provide: Router, useValue: mockRouter },
        { provide: IntervalBeeperService, useValue: mockIntervalBeeperService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeperSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to beeper when saveSettings called', () => {
    component.ngOnInit();
    const beeperSettingsElement: HTMLElement = fixture.debugElement.nativeElement;
    const submitbutton: HTMLButtonElement = beeperSettingsElement.querySelector('button[type="submit"]');
    submitbutton.click();
    expect(mockRouter.navigate.calls.count()).toBe(1, 'called');
  });

  it('should fail when interval input is not a valid number', () => {
    component.ngOnInit();
    const beeperSettingsElement: HTMLElement = fixture.debugElement.nativeElement;

    const intervalInput: HTMLInputElement = beeperSettingsElement.querySelector('input#interval');
    const submitbutton: HTMLButtonElement = beeperSettingsElement.querySelector('button[type="submit"]');
    const newInterval = 4;

    intervalInput.valueAsNumber = newInterval;
    intervalInput.dispatchEvent(new Event('input'));
    submitbutton.click();

    expect(mockIntervalBeeperService.setBeeperInterval).toHaveBeenCalledWith(newInterval);
  });

  // it('should fail when interval input is not a valid number')
});
