import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IChildren } from '../shared/domain/IChildren';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {
  constructor(private httpClient: HttpClient) { }

  getChildrenList(): Observable<IChildren[]> {
    const url = '../../../assets/children-data/children-data.json'
    return this.httpClient.get<IChildren[]>(url);
  }
}
