import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RequestInterceptor } from '../core/interceptors/request-interceptor';
import { CreateOrEditGameComponent } from './create-or-edit/create-or-edit-game.component';
import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from './../shared/shared.module';
import { GameComponent } from './game.component';
import { ViewGameComponent } from './view/view-game.component';
import { GameService } from './game.service';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [GameComponent, CreateOrEditGameComponent, ViewGameComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
  ],
  providers: [
    GameService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
})
export class GameModule {}
