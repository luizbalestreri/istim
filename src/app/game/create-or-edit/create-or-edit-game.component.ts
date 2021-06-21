import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppBase } from 'src/app/shared/components/app-base.component';
import { GameService } from '../game.service';
import { IGame } from '../interfaces/IGame';

@Component({
  templateUrl: './create-or-edit-game.component.html',
  styleUrls: ['./create-or-edit-game.component.scss'],
})
export class CreateOrEditGameComponent extends AppBase implements OnInit {
  title: string = '';
  imagem: string | ArrayBuffer | null = '';
  
  gameForm: FormGroup = this._formBuilder.group({
    id: [],
    title: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(60)],
    ],
    description: ['',
    [Validators.required, Validators.minLength(2), Validators.maxLength(60)],],
    value: ['', Validators.required],
    releaseDate: ['', Validators.required],
    videoURL: ['',
    [Validators.required, Validators.minLength(2), Validators.maxLength(60)],],
    categoryId: ['',[Validators.required,  Validators.maxLength(60)],],
    ageRangeId: ['',[Validators.required,  Validators.maxLength(60)],],
    image: [this.imagem]
  });

  constructor(
    _injector: Injector,
    @Inject(MAT_DIALOG_DATA) public game: IGame,
    public dialogRef: MatDialogRef<CreateOrEditGameComponent>,
    private _gameService: GameService,
    private _formBuilder: FormBuilder
  ) {
    super(_injector);
  }

  processFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.imagem = reader.result;
    };
}
  ngOnInit(): void {
    if (this.game) {
      this.title = `Editar: ${this.game.title}`;
      this.gameForm.patchValue(this.game);
    } else {
      this.title = 'Cadastrar Jogo';
    }
  }

  close(saved?: boolean): void {
    this.dialogRef.close(saved);
  }

  save(): void {
    let data: IGame = this.gameForm.getRawValue();
    data.id = +data.id;

    if (this.game) {
      this._gameService.edit(data).subscribe(
        (res) => {
          this._snackbarService.success('Jogo editado com sucesso!');
          this.close(true);
        },
        (err) => {
          this._snackbarService.alert('Erro ao editar jogo!');
        }
      );
    } else {
      this._gameService.create(data).subscribe(
        (res) => {
          this._snackbarService.success('Jogo cadastrado com sucesso!');
          this.close(true);
        },
        (err) => {
          this._snackbarService.alert('Erro ao cadastrar jogo!');
        }
      );
    }
  }
}
