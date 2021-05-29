import { ICategory } from './Interfaces/ICategory';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Injector } from '@angular/core';
import { CategoryService } from './category.service';
import { SnackbarService } from '../shared/components/snackbar/snackbar.service';
import { AppBase } from 'src/app/shared/components/app-base.component';

@Component({
  templateUrl: './category.component.html',
  providers: [SnackbarService],
})
export class CategoryComponent extends AppBase {
  constructor(
    _injector: Injector,
    private _categoryService: CategoryService,
    private _formBuilder: FormBuilder
  ) {
    super(_injector);
  }

  categoryForm: FormGroup = this._formBuilder.group({
    id: [],
    title: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(60)],
    ],
  });

  save(): void {
    let data: ICategory = this.categoryForm.getRawValue();
    data.id = +data.id;

    this._categoryService.create(data).subscribe(
      (res) => {
        this._snackbarService.success('Categoria cadastrada com sucesso!');
        console.log(res);
      },
      (err) => {
        this._snackbarService.alert('Erro ao cadastrar categoria!');
      }
    );
  }
}
