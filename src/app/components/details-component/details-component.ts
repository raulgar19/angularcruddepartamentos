import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-component',
  standalone: false,
  templateUrl: './details-component.html',
  styleUrl: './details-component.css',
})
export class DetailsComponent implements OnInit {
  public departamento!: Departamento;

  constructor(private _activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: Params) => {
      let numero = parseInt(params['numero']);
      let nombre = params['nombre'];
      let localidad = params['localidad'];

      this.departamento = new Departamento(numero, nombre, localidad);
    });
  }
}
