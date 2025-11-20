import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thing } from '../interface/things';
import { Area } from '../interface/area';
import { Grops } from '../interface/groups';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor(private http: HttpClient) { }

  getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>('/assets/things.json');
  }

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>('/assets/areas.json');
  }

  buildGroups(things: Thing[]) {
    const groups: Grops[] = [];

    const parents = things.filter(t => t.joinedWith === null);

    parents.forEach(parent => {
      const children = things.filter(t => t.joinedWith === parent.id);
      const status = this.computeStatus(parent, children)
      groups.push({
        id: parent.id,
        sku: parent.sku,
        defaultSku: parent.defaultSku,
        status: status,
        children,
      });
    });

    return groups;
  }

  computeStatus(parent: Thing, children: Thing[]): string {
    const allStatuses = [parent.status, ...children.map(c => c.status)];

    const allOpen = allStatuses.every(s => s === 'open');
    const allClosed = allStatuses.every(s => s === 'closed');

    if (allOpen) return 'green';
    if (allClosed) return 'red';
    return 'orange';
  }
}
