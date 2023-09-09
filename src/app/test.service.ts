import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
@Injectable()
export class TestService {
  // testEmitter: Subject<void> = new Subject<void>();
  // testObserver$: Observable<void>;
  billPaidUnpaid = new BehaviorSubject<any>({});
  billPaidUnpaidSelect = this.billPaidUnpaid.asObservable();
  constructor() {}
  setBillStatus(billStatus: any) {
    this.billPaidUnpaid.next(billStatus);
  }
}
