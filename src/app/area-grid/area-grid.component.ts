import { Component } from '@angular/core';

@Component({
  selector: 'app-area-grid',
  templateUrl: './area-grid.component.html',
  styleUrl: './area-grid.component.css',
})
export class AreaGridComponent {
  redirectToGitHub(githubLink: string): void {
    window.location.href = githubLink;
  }

  redirectToDemo(demoLink: string): void {
    window.location.href = demoLink;
  }
}
