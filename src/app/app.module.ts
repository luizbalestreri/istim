import { NavBarComponent } from './shared/components/header/navbar/navbar';
import { LoginbtnComponent} from './shared/components/header/loginbtn/loginbtn.component';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCollapseModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ValueComponent } from './value/value.component';

import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './auth/components/login/login.component';
import { NgbdDropdownFormModule } from './shared/components/header/loginbtn/loginbtn.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
