import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Module1Component } from './module-1/module-1.component';
import { Module2Component } from './module-2/module-2.component';

const routes: Routes = [
  { path: 'module_1', component: Module1Component },
  { path: 'module_2', component: Module2Component },
  { path: '', redirectTo: '/module_1', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
