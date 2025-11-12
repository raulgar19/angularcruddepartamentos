import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento';
import { environment } from '../../environments/environment.development';
import { NumberFormatStyle } from '@angular/common';

@Injectable()
export class ServiceDepartamentos {
  constructor(private _http: HttpClient) {}

  createDepartamento(departamento: Departamento): Observable<any> {
    let json = JSON.stringify(departamento);
    let header = new HttpHeaders().set('Content-type', 'application/json');
    let request = 'api/departamentos';
    let url = environment.urlApiDepartamentos + request;

    console.log('Creando departamento');

    return this._http.post(url, json, { headers: header });
  }

  getDepartamentos(): Observable<Array<Departamento>> {
    var request = 'api/departamentos';
    var url = environment.urlApiDepartamentos + request;

    return this._http.get<Array<Departamento>>(url);
  }

  findDepartamento(numero: number): Observable<Departamento> {
    var request = 'api/departamentos/' + numero;
    var url = environment.urlApiDepartamentos + request;

    return this._http.get<Departamento>(url);
  }

  updateDepartamento(departamento: Departamento): Observable<any> {
    let json = JSON.stringify(departamento);
    let header = new HttpHeaders().set('Content-type', 'application/json');
    let request = 'api/departamentos';
    let url = environment.urlApiDepartamentos + request;

    return this._http.put<any>(url, json, { headers: header });
  }

  deleteDepartamento(numero: number): Observable<any> {
    let request = 'api/departamentos/' + numero;
    let url = environment.urlApiDepartamentos + request;

    return this._http.delete<any>(url);
  }
}
