import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddKumojinEventDialogComponent } from '@shared/components/dialogs/add-kumojin-event/add-kumojin-event-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { TimeZoneService } from '@core/services/time-zone.service';
import { KumojinEventService } from '@core/services/kumojin-event.service';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { SharedModule } from '@shared/shared.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('#Component AddKumojinEventDialog', () => {

  let component: AddKumojinEventDialogComponent;
  let fixture: ComponentFixture<AddKumojinEventDialogComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [

        SharedModule, NoopAnimationsModule,

        TranslateTestingModule.withTranslations({ fr: require('../../../../../assets/i18n/fr.json') })

      ],

      declarations: [ AddKumojinEventDialogComponent ],

      providers: [ TimeZoneService,

        { provide: KumojinEventService, useValue: {} },

        { provide: MatDialogRef, useValue: {} },

      ],

    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKumojinEventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the AddKumojinEventDialogComponent', () => {

    expect(component).toBeTruthy();

  });

});
