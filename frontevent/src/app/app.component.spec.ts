import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TimeZoneService } from '@core/services/time-zone.service';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { ErrorMessageService } from '@core/services/error-message.service';
import {FlexLayoutModule} from '@angular/flex-layout';

describe('AppComponent', () => {

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [

        AppRoutingModule,

        SharedModule,

        FlexLayoutModule,

        TranslateTestingModule.withTranslations({ en: require('src/assets/i18n/fr.json') }),

        NoopAnimationsModule

      ],

      declarations: [ AppComponent ],

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
