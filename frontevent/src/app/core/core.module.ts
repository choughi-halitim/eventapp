import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TimeZoneService } from '@core/services/time-zone.service';
import { ApplicationConfigService } from '@core/services/application-config.service';
import { KumojinEventService } from '@core/services/kumojin-event.service';
import { KumojinEventsResolver } from '@core/resolvers/kumojin-events.resolver';

const SERVICES = [ KumojinEventService, TimeZoneService, ApplicationConfigService ];


const PROVIDERS = [ KumojinEventsResolver ];

@NgModule({

  declarations: [ ],

  imports: [ ],

  exports: [ ],

  providers: [ ...SERVICES, ...PROVIDERS ]

})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {

    if (parentModule) {

      throw new Error('CoreModule is already loaded. Import it in the AppModule only');

    }

  }

}
