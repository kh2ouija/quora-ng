import { Routes, RouterModule } from '@angular/router';

import { CreatePollComponent } from './create-poll/create-poll.component';
import { ShowPollComponent } from './show-poll/show-poll.component';

const routes: Routes = [
  { path: '', component: CreatePollComponent, pathMatch: 'full' },
  { path: ':hash', component: ShowPollComponent }  
];

export const routing = RouterModule.forRoot(routes);