import { Component } from '@angular/core';

import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FutureFeaturesComponent } from './future-features/future-features.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, FutureFeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
