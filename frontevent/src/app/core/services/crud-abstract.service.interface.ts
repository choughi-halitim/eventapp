import { Observable } from 'rxjs';
import {HttpResponseGetAllInterface} from '@core/interfaces/http-response-get-all.interface';

export interface CrudAbstractServiceInterface<T> {

  readonly _API_PATH: string;

  getAll(): Observable<HttpResponseGetAllInterface<T>>;

  getByPk(primaryKey: string): Observable<T>;

  add(addData: T): Observable<T>;

  update(addData: T): Observable<T> ;

  patch(addData: T): Observable<T>;

  delete(addData: T): Observable<T>;

}
