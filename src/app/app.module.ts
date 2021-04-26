import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ValueComponent } from './value/value.component';

import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './auth/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    SharedModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
