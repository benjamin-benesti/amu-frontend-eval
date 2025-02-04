import { Component, Output ,EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-client-form',
  template: `
  <form (ngSubmit)="onSubmit()" [formGroup]="form">
  <div class="row text-center" ><input type="text" placeholder="Nom Complet" name="fullName" formControlName="fullname" ></div>
  <div class="row text-center"><input type="email" placeholder="email" name="email" formControlName="mail" ></div>
  <div class="row text-center"><button [disabled]="!isValid()"> Enregistrer </button></div>
  <a routerLink="/"> Retour aux clients </a>
  </form>
  `,
  styles: []
})
export class AddClientForm {

    @Output()
    onNewClient = new EventEmitter<string>();


    form = new FormGroup({
        fullname : new FormControl(null,[Validators.required]),
        mail : new FormControl(null,[Validators.required,Validators.email])
    })

    isValid()
    {
      return this.form.valid;
    }

    onSubmit()
    {
        this.onNewClient.emit(this.form.value);
        this.form.setValue({
            fullname : "",
            mail : ""
        })
    }
}
