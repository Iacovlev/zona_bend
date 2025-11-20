import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ExampleService } from '../../service/example.service';
import { Thing } from '../../interface/things';
import { Area } from '../../interface/area';
import { Grops } from '../../interface/groups';

@Component({
  selector: 'app-module-1',
  templateUrl: './module-1.component.html',
  styleUrl: './module-1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Module1Component implements OnInit {
  public things: Thing[] = [];
  public areas: Area[] = [];

  constructor(private service: ExampleService) {
  }

  ngOnInit(): void {
    this.service.getThings().subscribe(thing => this.things = thing)
    this.service.getAreas().subscribe(areas => this.areas = areas)
    this.getThigsByAreas();
  }

  private getThigsByAreas() {
    this.areas.map((area, index) => {
      const thingsForArea = this.things.filter(t => t.areaId === area.areaId);
      const groups = this.buildGroups(thingsForArea)
      area.nodes = [...groups]
    })
  }

  private buildGroups(things: Thing[]) {
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

  public computeStatus(parent: Thing, children: Thing[]): string {
    const allStatuses = [parent.status, ...children.map(c => c.status)];

    const allOpen = allStatuses.every(s => s === 'open');
    const allClosed = allStatuses.every(s => s === 'closed');

    if (allOpen) return 'green';
    if (allClosed) return 'red';
    return 'orange';
  }
}

