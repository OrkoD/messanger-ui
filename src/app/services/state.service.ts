import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public messangerState: Subject<string> = new Subject();

  constructor() { }
}
