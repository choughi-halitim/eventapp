import {BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {CrudAbstractServiceInterface} from '@core/services/crud-abstract.service.interface';
import {HttpResponseGetAllInterface} from '@core/interfaces/http-response-get-all.interface';
import {map} from 'rxjs/operators';
import {EventEmitter} from '@angular/core';

export abstract class CrudAbstractService<T> implements CrudAbstractServiceInterface<T>{

  // Observable navItem source
  private _updateEvent: EventEmitter<null>= new EventEmitter<null>();

  _API_PATH: string;

  protected constructor(API_PATH: string, protected http: HttpClient) {

    if (!API_PATH) {

      throw new Error('API_PATH must be provide');

    }

    if (!http) {

      throw new Error('HttpClient must be provide');

    }

    this._API_PATH =  API_PATH;

  }

  getAll(): Observable<HttpResponseGetAllInterface<T>> {

    return this.http.get<HttpResponseGetAllInterface<T>>(this._API_PATH);

  }

  getByPk(primaryKey: string): Observable<T> {

    return this.http.get<T>(`${this._API_PATH}/${primaryKey}`);

  }


  add(addData: T): Observable<any> {

    return this.http.post<any>(this._API_PATH, addData).pipe(map((response) => {

      this._updateEvent.emit(null );

      return response;

    }));

  }

  update(addData: T): Observable<any> {

    return this.http.put<any>(this._API_PATH, addData).pipe(map((response) => {

      this._updateEvent.emit(null );

      return response;

    }));

  }

  patch(addData: T): Observable<any> {

    return this.http.patch<any>(this._API_PATH, addData);

  }

  delete(addData: T): Observable<any> {

    return this.http.delete<any>(this._API_PATH, addData);

  }

  get updateEvent() { return this._updateEvent; }

}
