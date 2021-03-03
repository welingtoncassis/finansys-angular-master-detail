import { OnInit } from '@angular/core';

import { BaseResourceService } from '../../services/base-resource.service';
import { BaseResourceModel } from '../../models/base-resource.model';

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = []

  constructor(
      private resourceService: BaseResourceService<T>
    ) { }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => this.resources = resources,
      error => alert('Erro ao carregar a lista')
    )
  }

  deleteResouurce(resource) {
    const mustDelete = confirm('Deseja realmente excluir este item?')

    if(mustDelete) {
      this.resourceService.delete(resource.id).subscribe(
        res => this.resources = this.resources.filter(el => el != resource),
        err => alert('Erro ao excluir a categoria')
      )
    }
  }

}
