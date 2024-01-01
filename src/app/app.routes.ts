import { Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AreaComponent } from './area/area.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { areaGuard } from './area.guard';
import { projectGuard } from './project.guard';
import { ProjectComponent } from './project/project.component';

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
