import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudAbstractService } from './crud-abstract.service';
import { CrudAbstractServiceInterface } from '@core/services/crud-abstract.service.interface';
import { ApplicationConfigService } from '@core/services/application-config.service';
import { ApiPathEnum } from '@core/enums/api-path-enum';
import { APP_CONFIG, AppConfigInterface } from '@core/configs/app.config';
import { KumojinEventInterface } from '@core/interfaces/kumojin-event.interface';

@Injectable()
export class KumojinEventService extends CrudAbstractService<KumojinEventInterface> implements CrudAbstractServiceInterface<KumojinEventInterface>{



  constructor(@Inject(APP_CONFIG) private _appConfig: AppConfigInterface,

              private _applicationConfigService: ApplicationConfigService,

              private _http: HttpClient) {

    super(_applicationConfigService.buildAbsolutePath([_appConfig[ApiPathEnum.API_PATH_EVENTS]]), _http);

  }

}
