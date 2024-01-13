import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-future-features',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './future-features.component.html',
  styleUrl: './future-features.component.css',
})
export class FutureFeaturesComponent {}
