import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ExampleService } from '../../service/example.service';

@Component({
  selector: 'app-module-1',
  templateUrl: './module-1.component.html',
  styleUrl: './module-1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Module1Component implements OnInit {
  constructor(private service: ExampleService) {
  }

  ngOnInit(): void {
   this.service.getThings().subscribe(value => console.log(value) )
    
  }
  
}
