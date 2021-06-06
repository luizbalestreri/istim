import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RequestInterceptor } from './interceptors/request-interceptor';
import { GameDataService } from './services/game-data.service';
import { PaginationService } from './services/pagination.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    GameDataService,
    PaginationService
  ],
})
export class CoreModule {}
