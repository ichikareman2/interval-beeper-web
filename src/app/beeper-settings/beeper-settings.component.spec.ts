import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeperSettingsComponent } from './beeper-settings.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('BeeperSettingsComponent', () => {
  let component: BeeperSettingsComponent;
  let fixture: ComponentFixture<BeeperSettingsComponent>;
  // const fb = new FormBuilder();

  beforeEach(async(() => {
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
});
