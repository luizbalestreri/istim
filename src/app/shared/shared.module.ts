import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { DropdownBasicComponent } from './dropdown-basic/dropdown-basic.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ColumnOneComponent,
    DropdownBasicComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColumnOneComponent
  ]
})
export class SharedModule { }
