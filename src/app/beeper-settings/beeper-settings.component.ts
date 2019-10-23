import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IntervalBeeperService } from '../interval-beeper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beeper-settings',
  templateUrl: './beeper-settings.component.html',
  styleUrls: ['./beeper-settings.component.css']
})
export class BeeperSettingsComponent implements OnInit {
  form = this.fb.group({
    interval: [1, ] // must be number, must be postive, required (or check and autoset to 1?)
  });
  constructor(
    private fb: FormBuilder,
    private intervalBeeperService: IntervalBeeperService,
    private router: Router

  ) { }

  ngOnInit() {
    this.intervalBeeperService.state$.subscribe(x => console.log('test', x));
  }

  saveSettings() {
    this.intervalBeeperService.setBeeperInterval(this.form.get('interval').value);
    this.goToBeeper();
  }
  goToBeeper() {
    this.router.navigate(['/beeper']);
  }
}
