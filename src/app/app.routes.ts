import { Routes, RouterModule } from '@angular/router';

import { CreatePollComponent } from './create-Poll/create-Poll.component';
import { ShowPollComponent } from './show-Poll/show-Poll.component';

const routes: Routes = [
  {path: '', component: CreatePollComponent, pathMatch: 'full'},
  {path: ':hash', component: ShowPollComponent}
];

export const routing = RouterModule.forRoot(routes);