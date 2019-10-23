import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeperSettingsComponent } from './beeper-settings.component';

describe('BeeperSettingsComponent', () => {
  let component: BeeperSettingsComponent;
  let fixture: ComponentFixture<BeeperSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeperSettingsComponent ]
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
});
