import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category.model';

@Component({
  selector: 'app-categoty-list',
  templateUrl: './categoty-list.component.html',
  styleUrls: ['./categoty-list.component.css']
})
export class CategotyListComponent implements OnInit {

  categories: Category[] = []

  constructor(
      private categoryService: CategoryService
    ) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories,
      error => alert('Erro ao carregar a lista')
    )
  }

  deleteCategory(category) {
    const mustDelete = confirm('Deseja realmente excluir este item?')

    if(mustDelete) {
      this.categoryService.delete(category.id).subscribe(
        res => this.categories = this.categories.filter(el => el != category),
        err => alert('Erro ao excluir a categoria')
      )
    }
  }

}
