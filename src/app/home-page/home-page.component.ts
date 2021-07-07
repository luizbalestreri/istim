import { IGameInfo } from './../game/interfaces/IGameInfo';
import { AppBase } from 'src/app/shared/components/app-base.component';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from './../game/game.service';
import { IGame } from './../game/interfaces/IGame';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { IShoppingCartItem } from '../shopping-cart/interfaces/IShoppingCartItem';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent  extends AppBase implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['image', 'title', 'value', 'description', 'releaseDate', 'category', 'ageRange', 'carrinho', 'verJogo'];
  dataSource!: MatTableDataSource<IGameInfo>;
  constructor(
    _injector: Injector,
    private dialog: MatDialog,
    private _router: Router, 
    private _shoppingCartService: ShoppingCartService,
    private _gameService: GameService) 
    {    
    super(_injector);
    this.setDataSource();}

  games: IGame[] = [];

  carouselGames: IGame[] = [];

  ngOnInit(): void {
    this._gameService.getAll().subscribe((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].image && this.carouselGames.length < 3) {
          this.carouselGames.push(res.data[i]);
        }
      }

      this.games = res.data; 
    });
  }

  redirectToGame(gameId: number): void {
    this._router.navigate(['/jogos/', gameId]);
  }

  setDataSource(): void {
    this._gameService.getAll().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res.data)
    });
  }

  addItemToShoppingCart(game): void {
    let data: IShoppingCartItem = {
      gameId: game.id,
      value: game.value,
      title: game.title,
      image: game.image,
      ageRange: game.ageRange.range,
    };

    this._shoppingCartService.addItemToShoppingCart(data);
    this._snackbarService.success('Jogo adicionado ao carrinho!');
    this._router.navigate(['carrinho']);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
