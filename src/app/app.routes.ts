import { Routes, RouterModule } from '@angular/router';

import { CreatePollComponent } from './create-poll/create-poll.component';
import { ShowPollComponent } from './show-poll/show-poll.component';
import { PollLinksComponent } from './poll-links/poll-links.component';

const routes: Routes = [
  { path: '', component: CreatePollComponent, pathMatch: 'full' },
  { path: 'success/:hash', component: PollLinksComponent },
  { path: ':hash', component: ShowPollComponent }  
];

export const routing = RouterModule.forRoot(routes);