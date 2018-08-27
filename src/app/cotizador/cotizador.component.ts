import { Component, OnInit } from '@angular/core';
import { BonorumProxy } from 'bonorumtour-core';

@Component({
  selector: 'bon-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})
export class CotizadorComponent implements OnInit {
  selected_dest_id = -1;
  selected_dest = 'Select a destination...';
  destinations = [];

  selected_serv_id = -1;
  selected_serv = 'Select a service...';
  services = [];
  services_filtered = [];

  selected_pric_id = -1;
  selected_pric = 'Select a price...';
  pricespax = [];
  pricespax_filtered = [];

  price = 0.0;

  constructor(private bonorumProxy: BonorumProxy) {}

  ngOnInit() {
    this.bonorumProxy.getDestinations().subscribe(data => {
      this.destinations = data;
    });
    this.bonorumProxy.getValidServices().subscribe(data => {
      this.services = data;
    });
    this.bonorumProxy.getPricesPax().subscribe(data => {
      this.pricespax = data;
    });
  }

  filterServicesByDestination(destination_id) {
    this.services_filtered = [];

    for (let i = 0; i < this.services.length; i++) {
      if (this.services[i].destination_id === destination_id) {
        this.services_filtered.push(this.services[i]);
      }
    }
  }
  filterPricesByService(service_id) {
    this.pricespax_filtered = [];

    for (let i = 0; i < this.pricespax.length; i++) {
      if (this.pricespax[i].service_id === service_id) {
        this.pricespax_filtered.push(this.pricespax[i]);
      }
    }
  }
}
