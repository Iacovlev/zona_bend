import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-2',
  templateUrl: './module-2.component.html',
  styleUrl: './module-2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Module2Component {}
