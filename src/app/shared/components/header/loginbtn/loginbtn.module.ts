import { LoginbtnComponent } from './loginbtn.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [LoginbtnComponent],
  exports: [LoginbtnComponent],
  bootstrap: [LoginbtnComponent]
})
export class NgbdDropdownFormModule {}