import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiliListComponent } from './pages/chili-list/chili-list.component';
import { AddChiliComponent } from './pages/add-chili/add-chili.component';
import { DescriptComponent } from './pages/descript/descript.component';

const routes: Routes = [
  {path : '', redirectTo: 'list', pathMatch: 'full'},
  {path : 'list', component : ChiliListComponent},
  {path : 'add', component : AddChiliComponent},
  {path : 'descript/:id', component : DescriptComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
