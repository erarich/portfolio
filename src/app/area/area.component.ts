import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

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

  viewOptions: string[] = ['List', 'Grid', 'Table'];

  viewSelect: string = 'List';
  listView: boolean = false;
  tableView: boolean = false;
  gridView: boolean = false;

  dataSource = new MatTableDataSource<any>([]);

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.onViewSelectChange();
    this.route.params.subscribe((params) => {
      this.areaType = params['type'];

      const jsonFilePath = `../../data/${this.areaType}.json`;

      this.http.get(jsonFilePath).subscribe(
        (data: any) => {
          this.jsonData = data;
          this.dataSource.data = this.jsonData;

          console.log('-------------------DEBUG: this.jsonData');
          console.log(this.jsonData);
        },
        (error) => {
          console.error('Error fetching JSON:', error);
        }
      );
    });
  }

  onViewSelectChange() {
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
