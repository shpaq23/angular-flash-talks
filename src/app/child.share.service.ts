import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildShareService {

  private readonly value$: Subject<string> = new Subject<string>();


  setValue(value: string): void {
    this.value$.next(value);
  }

  selectValue(): Observable<string> {
    return this.value$.asObservable();
  }

}
