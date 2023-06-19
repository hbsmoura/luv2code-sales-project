import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

    salesPersonList: SalesPerson[] = [
        new SalesPerson('Mano', 'Brown', 'manobrown@luv2code.com', 50000),
        new SalesPerson('KL', 'Jay', 'kljay@luv2code.com', 40000),
        new SalesPerson('Ice', 'Blue', 'iceblue@luv2code.com', 90000),
        new SalesPerson('Edi', 'Rock', 'edirock@luv2code.com', 60000)
    ]

}
