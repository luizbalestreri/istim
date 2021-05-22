import { ICategory } from './Interfaces/ICategory';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  constructor(
    private _categoryService: CategoryService,
    private _formBuilder: FormBuilder
  ) {}

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

    this._categoryService.create(data).subscribe((res) => {
      console.log(res);
    });
  }
}
