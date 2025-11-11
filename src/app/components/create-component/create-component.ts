import { Router } from '@angular/router';
import { ServiceDepartamentos } from '../../services/serviceDepartamentos';
import { Departamento } from './../../models/departamento';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-component',
  standalone: false,
  templateUrl: './create-component.html',
  styleUrl: './create-component.css',
})
export class CreateComponent {
  @ViewChild('cajaNumero') cajaNumero!: ElementRef;
  @ViewChild('cajaNombre') cajaNombre!: ElementRef;
  @ViewChild('cajaLocalidad') cajaLocalidad!: ElementRef;

  constructor(private _service: ServiceDepartamentos, private _router: Router) {}

  createDepartamento(): void {
    let numero = parseInt(this.cajaNumero.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;

    let departamento = new Departamento(numero, nombre, localidad);

    this._service.createDepartamento(departamento).subscribe((response) => {
      this._router.navigate(['/']);
    });
  }
}
