import { Component, Injector, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppBase } from 'src/app/shared/components/app-base.component';
import { CreateOrEditGameComponent } from './create-or-edit/create-or-edit-game.component';
import { GameService } from './game.service';
import { IGame } from './interfaces/IGame';

@Component({
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent extends AppBase {
  displayedColumns: string[] = ['actions', 'title'];
  dataSource!: MatTableDataSource<IGame>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    _injector: Injector,
    private dialog: MatDialog,
    private _gameService: GameService
  ) {
    super(_injector);
    this.setDataSource();
  }

  setDataSource(): void {
    this._gameService.getAll().subscribe((res) => {
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

  openDialogCreateOrEdit(game?: IGame): void {
    const dialogRef = this.dialog.open(CreateOrEditGameComponent, {
      data: game,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) this.setDataSource();
    });
  }

  deleteGame(game: IGame): void {
    let dialogRef = this._confirmDialogService.confirm(
      'Atenção!',
      `Remover o jogo: ${game.title}?`
    );

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this._gameService.delete(game.id).subscribe(
          (res) => {
            this._snackbarService.success('Jogo removido com sucesso!');
            this.setDataSource();
          },
          (err) => {
            this._snackbarService.warn('Erro ao remover jogo!');
          }
        );
      }
    });
  }
}
