import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AreaComponent } from './area.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

import { AreaGridModule } from '../area-grid/area-grid.module';
import { AreaListModule } from '../area-list/area-list.module';
import { AreaTableModule } from '../area-table/area-table.module';

@NgModule({
  declarations: [AreaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatTableModule,
    AreaGridModule,
    AreaListModule,
    AreaTableModule,
  ],
  exports: [AreaComponent],
})
export class AreaModule {}
