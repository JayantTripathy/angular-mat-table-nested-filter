export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  jobtitle: string;
  department: string;
  empBill: IBillingInfo[];
}
export interface IBillingInfo {
  name: string;
  billStatus: string;
  billAmount: number;
}
