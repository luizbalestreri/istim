import { Component, Injector, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { IAgeRange } from './Interfaces/IAgeRange';
import { AgeRangeService } from './ageRange.service';
import { AppBase } from '../shared/components/app-base.component';

@Component({
  templateUrl: './ageRange.component.html',
  styleUrls: ['./ageRange.component.scss'],
})
export class AgeRangeComponent extends AppBase {
  displayedColumns: string[] = ['actions', 'title'];
  dataSource!: MatTableDataSource<IAgeRange>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    _injector: Injector,
    private dialog: MatDialog,
    private _ageRangeService: AgeRangeService
  ) {
    super(_injector);
    this.setDataSource();
  }

  setDataSource(): void {
    this._ageRangeService.getAll().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
