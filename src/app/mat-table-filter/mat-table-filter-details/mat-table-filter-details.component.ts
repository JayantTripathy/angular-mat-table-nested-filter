import { Component, OnInit, Input } from '@angular/core';
import { Employee, IBillingInfo } from '../../model/employee';
@Component({
  selector: 'app-mat-table-filter-details',
  templateUrl: './mat-table-filter-details.component.html',
  styleUrls: ['./mat-table-filter-details.component.css'],
})
export class MatTableFilterDetailsComponent implements OnInit {
  @Input() billingInfo: any;
  displayedColumns: string[] = ['name', 'billStatus', 'billAmount'];
  constructor() {}

  ngOnInit() {
    console.log(this.billingInfo);
  }
}
