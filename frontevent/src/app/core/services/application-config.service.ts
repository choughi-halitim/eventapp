import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG, AppConfigInterface} from '../configs/app.config';
import {ApiPathEnum} from '@core/enums/api-path-enum';

@Injectable()
export class ApplicationConfigService {

  constructor(@Inject(APP_CONFIG) private _appConfig: AppConfigInterface) {
  }

  buildAbsolutePath(queryParams: ApiPathEnum | string[]): string {

    return [this._appConfig.apiBaseAbsoluteUrl, ...queryParams].join('/');

  }

}
