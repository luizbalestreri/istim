import { Component, Injector, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ICategory } from './Interfaces/ICategory';
import { CategoryService } from './category.service';
import { AppBase } from '../shared/components/app-base.component';
import { CreateOrEditCategoryComponent } from './create-or-edit/create-or-edit-category.component';

@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent extends AppBase {
  displayedColumns: string[] = ['actions', 'title'];
  dataSource!: MatTableDataSource<ICategory>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    _injector: Injector,
    private dialog: MatDialog,
    private _categoryService: CategoryService
  ) {
    super(_injector);
    this.setDataSource();
  }

  setDataSource(): void {
    this._categoryService.getAll().subscribe((res) => {
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

  openDialogCreateOrEdit(category?: ICategory): void {
    const dialogRef = this.dialog.open(CreateOrEditCategoryComponent, {
      data: category,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) this.setDataSource();
    });
  }

  deleteCategory(category: ICategory): void {
    let dialogRef = this._confirmDialogService.confirm(
      'Atenção!',
      `Remover a categoria: ${category.title}?`
    );

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this._categoryService.delete(category.id).subscribe(
          (res) => {
            this._snackbarService.success('Categoria removida com sucesso!');
            this.setDataSource();
          },
          (err) => {
            this._snackbarService.warn('Erro ao remover categoria!');
          }
        );
      }
    });
  }
}
