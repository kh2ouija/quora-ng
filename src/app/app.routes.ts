import { Routes, RouterModule } from '@angular/router';

import { CreatePollComponent } from './create-poll/create-poll.component';
import { ShowPollComponent } from './show-poll/show-poll.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: CreatePollComponent, pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: 'q/:hash', component: ShowPollComponent },
  { path: '**', redirectTo: '404' }
];

export const routing = RouterModule.forRoot(routes);