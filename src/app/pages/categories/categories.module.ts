import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { CategoriesRoutingModule } from './categories-routing.module';

import { CategotyListComponent } from './categoty-list/categoty-list.component';
import { CategotyFormComponent } from './categoty-form/categoty-form.component';

@NgModule({
  declarations: [CategotyListComponent, CategotyFormComponent],
  imports: [
    SharedModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
