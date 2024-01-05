import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

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

  sort: string[] = [
    'Last Updated',
    'Name',
    'Last Created',
    'Last Commit',
    'First Created',
  ];

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
  languageSelect: any[] = [];
  frameworkSelect: any[] = [];
  viewSelect: string = 'List';
  filteredData: any[] = [];
  listView: boolean = false;
  tableView: boolean = false;
  gridView: boolean = false;

  teste: boolean = false;

  displayedColumns: string[] = [
    'title',
    'technologies',
    'created_at',
    'last_commit',
    'github',
    'demo',
  ];
  dataSource = new MatTableDataSource<any>([]);

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
          this.dataSource.data = this.jsonData;
        },
        (error) => {
          console.error('Error fetching JSON:', error);
        }
      );
    });

    console.log('Initial viewSelect value:', this.viewSelect);
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

  filterProjects() {
    // Filter projects based on selected language and framework
    this.filteredData = this.jsonData.filter((project: any) => {
      const hasSelectedLanguage =
        this.languageSelect.length === 0 ||
        this.languageSelect.some((lang: string) =>
          project.technologies.includes(lang)
        );
      const hasSelectedFramework =
        this.frameworkSelect.length === 0 ||
        this.frameworkSelect.some((framework: string) =>
          project.technologies.includes(framework)
        );

      return hasSelectedLanguage && hasSelectedFramework;
    });
  }

  onFilterChange() {
    this.filterProjects();
  }

  onViewSelectChange() {
    console.log('---------------->>> Change: ', this.viewSelect);
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
