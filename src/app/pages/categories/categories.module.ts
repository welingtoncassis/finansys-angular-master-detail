import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategotyListComponent } from './categoty-list/categoty-list.component';
import { CategotyFormComponent } from './categoty-form/categoty-form.component';

@NgModule({
  declarations: [CategotyListComponent, CategotyFormComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule { }
