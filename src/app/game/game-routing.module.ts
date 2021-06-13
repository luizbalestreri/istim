import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { GameComponent } from './game.component';
import { ViewGameComponent } from './view/view-game.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    canActivate: [AdminGuard],
  },
  {
    path: ':gameId',
    component: ViewGameComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
