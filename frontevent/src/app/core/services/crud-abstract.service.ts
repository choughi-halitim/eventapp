import {Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import { CrudAbstractServiceInterface } from '@core/services/crud-abstract.service.interface';
import { HttpResponseGetAllInterface } from '@core/interfaces/http-response-get-all.interface';
import { map } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';

/**
 * @abstract class generique pour les appels http utilisant le CRUD
 * @typeParam T inteface object
 */
export abstract class CrudAbstractService<T> implements CrudAbstractServiceInterface<T>{

  /**
   * @private
   */
  private _updateEvent: EventEmitter<null>= new EventEmitter<null>();

  _API_PATH: string;

  /**
   * @param API_PATH
   * @param http
   * @protected
   */
  protected constructor(API_PATH: string, protected http: HttpClient) {

    if (!API_PATH) {

      throw new Error('API_PATH must be provide');

    }

    if (!http) {

      throw new Error('HttpClient must be provide');

    }

    this._API_PATH =  API_PATH;

  }

  /**
   *
   * @param httpParams
   */
  getAll(httpParams: HttpParams | null = null): Observable<HttpResponseGetAllInterface<T>> {

    let params = {};

    if (httpParams) { params = httpParams; }

    return this.http.get<HttpResponseGetAllInterface<T>>(this._API_PATH, {
      params : params
    });

  }

  /**
   *
   * @param primaryKey
   */
  getByPk(primaryKey: string): Observable<T> {

    return this.http.get<T>(`${this._API_PATH}/${primaryKey}`);

  }


  /**
   * @param addData
   */
  add(addData: T): Observable<any> {

    return this.http.post<any>(this._API_PATH, addData , { observe: 'response'}).pipe(map((response) => {

      this._updateEvent.emit(null );

      return response;

    }));
  }

  /**
   * @param addData
   */
  update(addData: T): Observable<any> {

    return this.http.put<any>(this._API_PATH, addData).pipe(map((response) => {

      this._updateEvent.emit(null );

      return response;

    }));

  }

  /**
   *
   * @param addData
   */
  patch(addData: T): Observable<T> {

    return this.http.patch<any>(this._API_PATH, addData);

  }

  /**
   *
   * @param addData
   * @typeparam T génerique CRUD Interface
   * @return Observable<T>
   */
  delete(addData: T): Observable<T> {

    return this.http.delete<any>(this._API_PATH, addData);

  }

  /**
   * @return EventEmitter<null>
   */
  get updateEvent():EventEmitter<null> { return this._updateEvent; }

}
