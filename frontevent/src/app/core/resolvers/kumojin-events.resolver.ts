import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { KumojinEventService } from '@core/services/kumojin-event.service';
import { KumojinEventInterface } from '@core/interfaces/kumojin-event.interface';
import {HttpResponseGetAllInterface} from '@core/interfaces/http-response-get-all.interface';

@Injectable()
export class KumojinEventsResolver implements Resolve<HttpResponseGetAllInterface<KumojinEventInterface>> {

  constructor(
    private _eventService: KumojinEventService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HttpResponseGetAllInterface<KumojinEventInterface>>
    | Promise<HttpResponseGetAllInterface<KumojinEventInterface>> | HttpResponseGetAllInterface<KumojinEventInterface> {

    return this._eventService.getAll();

  }

}
