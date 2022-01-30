import { Component } from '@angular/core';
import {Client,Clients} from "../types/client";
import {ApiComponent} from "../api/http"

@Component({
  selector: 'list-client',
  template: `
  <div *ngIf="clients">
  <div class="Titre"><h1>Liste des clients</h1></div>
  <button><a routerLink="/create">Créer un client</a> </button>
  <table>
   <div class ="row" ><tr *ngFor="let client of clients">
       <div class="col"> <th><a routerLink="/{{client.id}}"> {{client.fullName}} </a> </th> </div>
       <div class = "col"><th>{{client.email}}</th></div>
   </tr> </div>
  </table>
  </div>
  `,
  styles: ['.Titre { text-align:center; margin-bottom:3%; background-color:black; color:white;} th {width:50%;} ']
})
export class ListClientComponent {

  clients : Clients;

  constructor(private service:ApiComponent){}

  ngOnInit()
  {
    this.service.findAllClients().subscribe(clients => this.clients = clients)
  }


}
