import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeeperSettingsComponent } from './beeper-settings/beeper-settings.component';
import { BeeperComponent } from './beeper/beeper.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/settings', pathMatch: 'full'
  },
  {
    path: 'settings', component: BeeperSettingsComponent
  },
  {
    path: 'beeper', component: BeeperComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
