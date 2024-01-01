import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrl: './area.component.css',
})
export class AreaComponent implements OnInit {
  areaType!: string;
  jsonData: any;
  value: any;
  modeSelect: any;

  sort: string[] = ['Last Updated', 'Name', 'Last Created', 'First Created'];

  language: string[] = [
    'Python',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'GDScript',
  ];

  framework: string[] = [
    'React',
    'Angular',
    'Godot',
    'Angular',
    'Streamlit',
    'Express',
  ];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.areaType = params['type'];

      this.loadAreaData();

      const jsonFilePath = `../../data/${this.areaType}.json`;

      this.http.get(jsonFilePath).subscribe(
        (data: any) => {
          this.jsonData = data;
        },
        (error) => {
          console.error('Error fetching JSON:', error);
        }
      );
    });
  }

  redirectToGitHub(githubLink: string): void {
    window.location.href = githubLink;
  }

  redirectToDemo(demoLink: string): void {
    window.location.href = demoLink;
  }

  loadAreaData() {
    console.log('Carregando dados para a área: ', this.areaType);
  }
}
