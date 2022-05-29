import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../services/clients.service';
import { Client } from '../../../interfaces/about/client.interface';
import { Recomendation } from '../../../interfaces/about/recomendation.interface';

@Component({
  selector: 'app-clients-references-section',
  templateUrl: './clients-references-section.component.html',
  styleUrls: ['./clients-references-section.component.css'],
})
export class ClientsReferencesSectionComponent implements OnInit {
  clients: Client[] = [];
  recomendations: Recomendation[] = [];

  constructor(private _clientsService: ClientsService) {
    this.clients = this._clientsService.clients;
    this.recomendations = this._clientsService.recomendations;
  }

  ngOnInit(): void {}
}
