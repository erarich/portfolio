import { Routes, Router } from '@angular/router';

import { HomeComponent } from './home/pages/home/home.component';
import { AreaComponent } from './home/pages/area/area.component';
import { NotfoundComponent } from './home/pages/notfound/notfound.component';
import { areaGuard } from './home/pages/area/area.guard';
import { projectGuard } from './home/pages/project/project.guard';
import { ProjectComponent } from './home/pages/project/project.component';

export const routes: Routes = [
  {
    path: 'area/:type',
    component: AreaComponent,
    canActivate: [areaGuard],
    data: {
      router: Router,
    },
  },
  {
    path: 'project/:id',
    component: ProjectComponent,
    // canActivate: [projectGuard],
    data: {
      router: Router,
    },
  },
  { path: '', component: HomeComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];
