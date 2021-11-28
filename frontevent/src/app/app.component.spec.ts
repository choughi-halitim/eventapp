import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TimeZoneService } from '@core/services/time-zone.service';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { ErrorMessageService } from '@core/services/error-message.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FrontEventLayoutComponent} from '@shared/layout/front-event/front-event-layout.component';

describe('AppComponent', () => {

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [

        AppRoutingModule,

        FlexLayoutModule,

        TranslateTestingModule.withTranslations({ en: require('src/assets/i18n/fr.json') }),

        BrowserAnimationsModule,

        SharedModule

      ],

      declarations: [ AppComponent, FrontEventLayoutComponent ],

      providers: [

        { provide: ErrorMessageService, useValue: new ErrorMessageService() },

        { provide: TimeZoneService, useValue: new TimeZoneService() },

      ]

    }).compileComponents();

  });

  it('should create the app', () => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;

    expect(app).toBeTruthy();

    fixture.detectChanges();

  });

  it(`should have as title 'Kumojin Event'`, () => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;


    expect(app.title).toEqual('Kumojin Event');

  });

  it('should init current timezone app', () => {

    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-front-event-layout')).toBeTruthy();

  });

});
