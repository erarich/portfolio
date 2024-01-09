import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AreaGridComponent } from './area-grid.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AreaGridComponent],
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
  ],
  exports: [AreaGridComponent],
})
export class AreaModule {}
