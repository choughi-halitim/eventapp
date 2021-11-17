import { environment } from '../../../environments/environment';
import {InjectionToken} from '@angular/core';

export interface AppConfigInterface {

  apiBaseRelativeUrl: string,

  apiBaseAbsoluteUrl: string,

  API_PATH_EVENTS: string,

}

export const APP_CONFIG = new InjectionToken<AppConfigInterface>('app.config');

export const KUMOJIN_EVENT_APP_CONFIG: AppConfigInterface =  {

  apiBaseRelativeUrl: environment.apiBaseRelativeUrl,

  apiBaseAbsoluteUrl: environment.apiBaseAbsoluteUrl,

  API_PATH_EVENTS: environment.API_PATH_EVENTS,

};
