import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/serviceDepartamentos';

@Component({
  selector: 'app-departamentos-component',
  standalone: false,
  templateUrl: './departamentos-component.html',
  styleUrl: './departamentos-component.css',
})
export class DepartamentosComponent implements OnInit {
  departamentos!: Array<Departamento>;

  constructor(private _service: ServiceDepartamentos) {}

  ngOnInit(): void {
    this._service.getDepartamentos().subscribe((response) => {
      this.departamentos = response;
    });
  }
}
