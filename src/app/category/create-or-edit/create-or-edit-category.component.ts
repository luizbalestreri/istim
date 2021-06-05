import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { AppBase } from 'src/app/shared/components/app-base.component';
import { CategoryService } from '../category.service';
import { ICategory } from '../Interfaces/ICategory';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './create-or-edit-category.component.html',
  styleUrls: ['./create-or-edit-category.component.scss'],
  providers: [SnackbarService],
})
export class CreateOrEditCategoryComponent extends AppBase implements OnInit {
  title: string = '';

  categoryForm: FormGroup = this._formBuilder.group({
    id: [],
    title: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(60)],
    ],
  });

  constructor(
    _injector: Injector,
    @Inject(MAT_DIALOG_DATA) public category: ICategory,
    public dialogRef: MatDialogRef<CreateOrEditCategoryComponent>,
    private _categoryService: CategoryService,
    private _formBuilder: FormBuilder
  ) {
    super(_injector);
  }

  ngOnInit(): void {
    if (this.category) {
      this.title = `Editar: ${this.category.title}`;
      this.categoryForm.patchValue(this.category);
    } else {
      this.title = 'Cadastrar Categoria';
    }
  }

  close(saved?: boolean): void {
    this.dialogRef.close(saved);
  }

  save(): void {
    let data: ICategory = this.categoryForm.getRawValue();
    data.id = +data.id;

    if (this.category) {
      this._categoryService.edit(data).subscribe(
        (res) => {
          this._snackbarService.success('Categoria editada com sucesso!');
          this.close(true);
        },
        (err) => {
          this._snackbarService.alert('Erro ao editar categoria!');
        }
      );
    } else {
      this._categoryService.create(data).subscribe(
        (res) => {
          this._snackbarService.success('Categoria cadastrada com sucesso!');
          this.close(true);
        },
        (err) => {
          this._snackbarService.alert('Erro ao cadastrar categoria!');
        }
      );
    }
  }
}
