import { Routes, RouterModule } from '@angular/router';

import { PollFormComponent } from './poll-form/poll-form.component';

const routes: Routes = [
  {path: '', component: PollFormComponent}
];

export const routing = RouterModule.forRoot(routes);