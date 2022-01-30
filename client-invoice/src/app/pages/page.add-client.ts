import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiComponent } from '../api/http';

@Component({
  selector: 'add-client',
  template: `
  <h1>Créer un client</h1>
  <add-client-form (onNewClient)="addClient($event)">
  `,
  styles: []
})
export class AddClientComponent {

  constructor (private service : ApiComponent,private router:Router){}

  addClient(message: any)
  {
    this.service.createClient(message.fullname,message.mail).subscribe(()=>this.router.navigate(['/']));
  }
}
