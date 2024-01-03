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

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

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
  languageSelect!: string;
  frameworkSelect!: string;
  viewSelect: string = 'List';

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
