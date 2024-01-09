import { Component } from '@angular/core';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrl: './area-list.component.css',
})
export class AreaListComponent {
  redirectToGitHub(githubLink: string): void {
    window.location.href = githubLink;
  }

  redirectToDemo(demoLink: string): void {
    window.location.href = demoLink;
  }
}
