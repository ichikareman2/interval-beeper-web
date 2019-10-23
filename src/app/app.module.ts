import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeeperSettingsComponent } from './beeper-settings/beeper-settings.component';
import { RouterModule } from '@angular/router';
import { BeeperComponent } from './beeper/beeper.component';

@NgModule({
  declarations: [
    AppComponent,
    BeeperSettingsComponent,
    BeeperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
