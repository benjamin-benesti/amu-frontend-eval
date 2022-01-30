import { Component, Output ,EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-invoice-form',
  template: `
  <form (ngSubmit)="onSubmit()" [formGroup]="form">
  <div class="row text-center" ><input formControlName="amount" type="number" placeholder="Montant de la facture" name="amount"></div>
  <div class="row text-center" ><select formControlName="status" name="status">
    <option value="Payée">PAID</option>
    <option value="Envoyée">SENT</option>
  </select></div>
  <div class="row text-center" ><input [disabled]="!isValid()" type="submit" value="Enregistrer la facture"></div>
  </form>

  `,
  styles: []
})
export class AddInvoiceForm {

    @Output()
    onNewInvoice = new EventEmitter<string>();


    form = new FormGroup({
        amount : new FormControl(null,[Validators.required]),
        status : new FormControl(null,[Validators.required])
    })

    isValid()
    {
      return this.form.valid;
    }

    onSubmit()
    {
        this.onNewInvoice.emit(this.form.value);
    }
}
