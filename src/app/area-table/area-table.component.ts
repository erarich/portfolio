import { Component } from '@angular/core';

@Component({
  selector: 'app-area-table',
  templateUrl: './area-table.component.html',
  styleUrl: './area-table.component.css',
})
export class AreaTableComponent {
  redirectToGitHub(githubLink: string): void {
    window.location.href = githubLink;
  }

  redirectToDemo(demoLink: string): void {
    window.location.href = demoLink;
  }
}
