import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public date: any = new Date().toISOString().slice(0, 10);


  public products: any = [
    { name: 'Apple', price: '$20', expirationDate: new Date('10/22/2019').toISOString().slice(0, 10) },
    { name: 'Pears', price: '$25', expirationDate: new Date('1/27/2019').toISOString().slice(0, 10) },
    { name: 'Candy', price: '$30', expirationDate: new Date('10/22/2024').toISOString().slice(0, 10) },
    { name: 'Banana', price: '$30', expirationDate: new Date('10/26/2022').toISOString().slice(0, 10) }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.date.split('-')[0]);
    setTimeout(() => {
      this.checkDate();
    }, 1000)
  }

  checkDate() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.date.split('-')[0] === this.products[i].expirationDate.split('-')[0] && this.date.split('-')[1] === this.products[i].expirationDate.split('-')[1]) {
        if (this.products[i].expirationDate.split('-')[2] - this.date.split('-')[2] === 2) {
          document.querySelectorAll<any>('.product')[i].style.backgroundColor = 'yellow';
        }
        console.log();
      }
      else if (Date.parse(this.date) <= Date.parse(this.products[i].expirationDate)) {
      }
      else {
        document.querySelectorAll<any>('.product')[i].style.backgroundColor = 'red';
      }
    }
  }
}
