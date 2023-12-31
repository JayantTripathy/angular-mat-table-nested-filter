import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee, IBillingInfo } from '../model/employee';
import { EmpFilter, filterOption } from '../model/empfilter';
import { MatSelectChange } from '@angular/material/select';
import { TestService } from '../test.service';
@Component({
  selector: 'app-mat-table-filter',
  templateUrl: './mat-table-filter.component.html',
  styleUrls: ['./mat-table-filter.component.scss'],
})
export class MatTableFilterComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'gender'];

  EmpData: Employee[] = [
    {
      id: 1,
      firstname: 'Mellie',
      lastname: 'Gabbott',
      email: 'mgabbott0@indiatimes.com',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
      empBill: [
        { name: 'abc-1', billStatus: 'Paid', billAmount: 300 },
        { name: 'abc-2', billStatus: 'Unpaid', billAmount: 300 },
        { name: 'abc-3', billStatus: 'Paid', billAmount: 300 },
        { name: 'abc-4', billStatus: 'Unpaid', billAmount: 300 },
        { name: 'abc-5', billStatus: 'Paid', billAmount: 300 },
        { name: 'abc-6', billStatus: 'Unpaid', billAmount: 300 },
      ],
    },
    {
      id: 2,
      firstname: 'Yehudi',
      lastname: 'Ainsby',
      email: 'yainsby1@w3.org',
      gender: 'Male',
      department: 'Support',
      jobtitle: 'Support Analyst',
      empBill: [{ name: 'abc-2', billStatus: 'Unpaid', billAmount: 300 }],
    },
    {
      id: 3,
      firstname: 'Noellyn',
      lastname: 'Primett',
      email: 'nprimett2@ning.com',
      gender: 'Male',
      department: 'Human Resources',
      jobtitle: 'Project Manager',
      empBill: [{ name: 'abc-3', billStatus: 'Paid', billAmount: 300 }],
    },
    {
      id: 4,
      firstname: 'Stefanie',
      lastname: 'Yurenin',
      email: 'syurenin3@boston.com',
      gender: 'Female',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      empBill: [{ name: 'abc-4', billStatus: 'Unpaid', billAmount: 300 }],
    },
    {
      id: 5,
      firstname: 'Stormi',
      lastname: "O'Lunny",
      email: 'solunny4@patch.com',
      gender: 'Female',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      empBill: [{ name: 'abc-5', billStatus: 'Paid', billAmount: 300 }],
    },
  ];

  genders: string[] = ['All', 'Male', 'Female'];
  billstatus: string[] = ['None', 'Paid', 'Unpaid'];

  empFilters: EmpFilter[] = [];
  billFilters: EmpFilter[] = [];

  defaultValue = 'All';
  defaultValue1 = 'none';
  filterDictionary = new Map<string, string>();

  dataSource = new MatTableDataSource(this.EmpData);
  dataSourceFilters = new MatTableDataSource(this.EmpData);

  constructor() {}

  ngOnInit(): void {
    this.empFilters.push({
      name: 'gender',
      options: this.genders,
      defaultValue: this.defaultValue,
    });
    this.billFilters.push({
      name: 'billstatus',
      options: this.billstatus,
      defaultValue: this.defaultValue1,
    });

    this.dataSourceFilters.filterPredicate = function (record, filter) {
      debugger;
      var map = new Map(JSON.parse(filter));
      console.log(map);
      let isMatch = false;
      for (let [key, value] of map) {
        isMatch = value == 'All' || record[key as keyof Employee] == value;
        if (!isMatch) return false;
      }
      return isMatch;
    };
  }

  applyEmpFilter(ob: MatSelectChange, empfilter: EmpFilter) {
    this.filterDictionary.set(empfilter.name, ob.value);

    var jsonString = JSON.stringify(
      Array.from(this.filterDictionary.entries())
    );

    this.dataSourceFilters.filter = jsonString;
    //console.log(this.filterValues);
  }
  applyEmpFilter1(ob: MatSelectChange, empfilter: EmpFilter) {
    alert(empfilter.name);
    alert(ob.value);
    this.filterDictionary.set(empfilter.name, ob.value);

    var jsonString = JSON.stringify(
      Array.from(this.filterDictionary.entries())
    );

    this.dataSourceFilters.filter = jsonString;
    //console.log(this.filterValues);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  changed(value: any) {
    //this.testservice.setBillStatus(value);
  }
  expandedRows: { [key: number]: boolean } = {};

  expand(element: Employee) {
    this.expandedRows[element.id] = !this.expandedRows[element.id];
  }
}
