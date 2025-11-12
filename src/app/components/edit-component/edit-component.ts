import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceDepartamentos } from '../../services/serviceDepartamentos';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-edit-component',
  standalone: false,
  templateUrl: './edit-component.html',
  styleUrl: './edit-component.css',
})
export class EditComponent implements OnInit {
  public departamento!: Departamento;
  @ViewChild('cajaNumero') cajaNumero!: ElementRef;
  @ViewChild('cajaNombre') cajaNombre!: ElementRef;
  @ViewChild('cajaLocalidad') cajaLocalidad!: ElementRef;

  constructor(
    private _service: ServiceDepartamentos,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let numero = parseInt(params['numero']);
      this._service.findDepartamento(numero).subscribe((response) => {
        this.departamento = response;
      });
    });
  }

  updateDepartamento(): void {
    let numero = parseInt(this.cajaNumero.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;

    let editDepartamento = new Departamento(numero, nombre, localidad);

    this._service.updateDepartamento(editDepartamento).subscribe((response) => {
      this._router.navigate([
        '/details',
        editDepartamento.numero,
        editDepartamento.nombre,
        editDepartamento.localidad,
      ]);
    });
  }
}
