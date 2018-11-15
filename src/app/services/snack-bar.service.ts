import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  public sendNotification: Subject<string> = new Subject();

  constructor() { }
}
