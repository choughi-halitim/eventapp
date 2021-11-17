import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { translateBrowserLoaderFactory } from '@core/utils/translate-browser.loader';
import { CoreModule } from '@core/core.module';
import { APP_CONFIG, KUMOJIN_EVENT_APP_CONFIG } from '@core/configs/app.config';

@NgModule({

  declarations: [ AppComponent ],

  imports: [

    CoreModule,

    SharedModule,

    BrowserModule,

    AppRoutingModule,

    BrowserAnimationsModule,

    BrowserTransferStateModule,

    TranslateModule.forRoot({

      defaultLanguage: 'fr',

      loader: { provide: TranslateLoader, useFactory: translateBrowserLoaderFactory, deps: [ HttpClient, TransferState ] }

    }),

  ],

  providers:    [

    { provide: APP_CONFIG, useValue: KUMOJIN_EVENT_APP_CONFIG }

  ],

  bootstrap:    [ AppComponent ]

})
export class AppModule { }
