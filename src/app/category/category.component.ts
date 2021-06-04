import { Component, Injector, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppBase } from '../shared/components/app-base.component';
import { ICategory } from './Interfaces/ICategory';
import { CategoryService } from './category.service';

@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent extends AppBase implements AfterViewInit {
  displayedColumns: string[] = ['actions', 'title'];
  dataSource!: MatTableDataSource<ICategory>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(_injector: Injector, private _categoryService: CategoryService) {
    super(_injector);
    this._categoryService.getAll().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 100);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
