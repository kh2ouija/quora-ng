import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { PollFormComponent } from './poll-form/poll-form.component';
import { PollApiService } from './poll-api.service';

@NgModule({
  declarations: [
    AppComponent,
    PollFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    PollApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
