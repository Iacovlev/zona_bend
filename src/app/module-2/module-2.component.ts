import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { ExampleService } from '../../service/example.service';
import { Area } from '../../interface/area';

@Component({
  selector: 'app-module-2',
  templateUrl: './module-2.component.html',
  styleUrl: './module-2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Module2Component {
   public areas$!: Observable<Area[]>;

  constructor(private service: ExampleService) {
    this.areas$ = combineLatest([
      this.service.getAreas(),
      this.service.getThings(),
    ]).pipe(
      map(([areas, things]) =>
        areas.map(area => ({
          ...area,
          nodes: this.service.buildGroups(
            things.filter(t => t.areaId === area.areaId)
          )
        }))
      )
    );
  }
}
