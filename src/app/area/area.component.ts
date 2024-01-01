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

  viewOptions: string[] = ['List', 'Grid', 'Table'];

  sortSelect!: string;
  languageSelect!: string;
  frameworkSelect!: string;
  viewSelect!: string;

  listView: boolean = false;
  tableView: boolean = false;
  gridView: boolean = false;

  teste: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.onViewSelectChange();
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

  onViewSelectChange() {
    console.log(this.viewSelect);
    switch (this.viewSelect) {
      case 'List':
        this.listView = true;
        this.tableView = false;
        this.gridView = false;
        break;
      case 'Table':
        this.listView = false;
        this.tableView = true;
        this.gridView = false;
        break;
      case 'Grid':
        this.listView = false;
        this.tableView = false;
        this.gridView = true;
        break;
      default:
        this.listView = true; // Defina um padrão, por exemplo, para 'List'
        this.tableView = false;
        this.gridView = false;
        break;
    }
  }
}
