import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ExampleService } from '../../service/example.service';
import { Thing } from '../../interface/things';
import { Area } from '../../interface/area';

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
      const groups = this.service.buildGroups(thingsForArea)
      area.nodes = [...groups]
    })
  }
}

