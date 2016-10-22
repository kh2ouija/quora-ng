import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { PollApiService } from './poll-api.service';
import { ShowPollComponent } from './show-poll/show-poll.component';
import { PollLinksComponent } from './poll-links/poll-links.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePollComponent,
    ShowPollComponent,
    PollLinksComponent
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
