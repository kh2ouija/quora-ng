import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { CreatePollComponent } from './create-Poll/create-Poll.component';
import { PollApiService } from './Poll-api.service';
import { ShowPollComponent } from './show-Poll/show-Poll.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePollComponent,
    ShowPollComponent
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
