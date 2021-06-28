import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BibliotecaComponent } from './biblioteca.component';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliotecaRoutingModule {}