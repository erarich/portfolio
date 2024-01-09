import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-area-table',
  templateUrl: './area-table.component.html',
  styleUrl: './area-table.component.css',
})
export class AreaTableComponent {
  @Input() dataSource = new MatTableDataSource<any>([]);
  @Input() isVisible: boolean = false;

  displayedColumns: string[] = [
    'title',
    'technologies',
    'created_at',
    'last_commit',
    'github',
    'demo',
  ];

  redirectToGitHub(githubLink: string): void {
    window.location.href = githubLink;
  }

  redirectToDemo(demoLink: string): void {
    window.location.href = demoLink;
  }
}
