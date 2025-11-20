import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-1',
  templateUrl: './module-1.component.html',
  styleUrl: './module-1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Module1Component {

}
