import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategotyFormComponent } from './categoty-form/categoty-form.component';
import { CategotyListComponent } from './categoty-list/categoty-list.component';

const routes: Routes = [
  { path:'', component: CategotyListComponent},
  { path:'new', component: CategotyFormComponent },
  { path:':id/edit', component: CategotyFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
