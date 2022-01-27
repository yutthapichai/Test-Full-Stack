import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {


  displayedColumns: string[] = ['no', 'name'];
  dataSource = new MatTableDataSource();


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  Perpage = 100;
  pageSize    = [1, 5, 10, 20, 100];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.apiGet().subscribe((result: any) => {
      this.dataSource.data = result.map((item: any) => ({ name: item}));
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: any) {
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
  }
}

