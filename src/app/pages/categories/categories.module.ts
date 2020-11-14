import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategotyListComponent } from './categoty-list/categoty-list.component';
import { CategotyFormComponent } from './categoty-form/categoty-form.component';

@NgModule({
  declarations: [CategotyListComponent, CategotyFormComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
