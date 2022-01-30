import { Component, Input } from '@angular/core';
import {Clients} from "../types/client";
import {ApiComponent} from "../api/http"

@Component({
  selector: 'list-client',
  template: `
  <div *ngIf="clients">
  <div class="Titre"><h1>Liste des clients</h1></div>
  <div class="text-center mb-2"><button type="button" class="btn btn-primary"><a class="butlink" routerLink="/create">Créer un client</a> </button></div>
   <div class="row  mb-2 pl-3 pr-3" *ngFor="let client of clients">
        <div class="col text-center border"><a routerLink="/{{client.id}}"> {{client.fullName}} </a> </div>
        <div class="col text-center border">{{client.email}}</div>
  </div>
  </div>
  `,
  styles: ['.Titre { text-align:center; margin-bottom:3%; background-color:black; color:white;} th {width:50%;} .butlink {color:inherit; text-decoration:none;}']
})
export class ListClientComponent {
  clients : Clients;

  constructor(private service:ApiComponent){}

  ngOnInit()
  {
    this.service.findAllClients().subscribe(clients => this.clients = clients)
  }


}
