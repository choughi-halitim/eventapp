import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FrontEventLayoutComponent } from './layout/front-event/front-event-layout.component';
import { NavigationMainComponent } from '@shared/includes/navigation-main/navigation-main.component';
import { HeaderComponent } from '@shared/includes/header/header.component';
import { FooterComponent } from '@shared/includes/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { SpacerComponent } from '@shared/components/spacer/spacer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SelectTimezoneComponent } from '@shared/components/inputs/select-timezone/select-timezone.component';
import { SearchEventInputsComponent } from '@shared/components/inputs/search-event/search-event-inputs.component';
import { AddKumojinEventDialogComponent } from '@shared/components/dialogs/add-kumojin-event/add-kumojin-event-dialog.component';
import { KumojinEventsComponent } from '@shared/pages/kumojin-events/kumojin-events.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatCardModule } from '@angular/material/card';
import { DisplayDateTimezoneFormatComponent } from '@shared/components/labels/display-date-timezone-format.component';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

const MATERIAL_MODULES = [

  MatToolbarModule, MatButtonModule, MatFormFieldModule, MatDialogModule, MatIconModule, MatTooltipModule, MatCardModule,

  MatDividerModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatAutocompleteModule,

  MatSlideToggleModule, MatProgressBarModule, NgxMatDatetimePickerModule,  NgxMatNativeDateModule, NgxMatTimepickerModule

];

const COMPONENTS = [

  // LAYOUT AND COMPONENTS INCLUDES
  FrontEventLayoutComponent, HeaderComponent, FooterComponent, NavigationMainComponent,

  // CUSTOM COMPONENTS
  SpacerComponent,

  // DIALOGS
  AddKumojinEventDialogComponent,

  // INPUTS
  SelectTimezoneComponent, SearchEventInputsComponent,

  // PAGES
  KumojinEventsComponent,

  // LABELS
  DisplayDateTimezoneFormatComponent
];

const IMPORT_EXPORT = [ FlexLayoutModule, TranslateModule, HttpClientModule,  CommonModule, FormsModule, ReactiveFormsModule ];

const PROVIDERS = [

  { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },

  { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }

];

@NgModule({

  declarations: [ ...COMPONENTS ],

  imports:      [...MATERIAL_MODULES, ...IMPORT_EXPORT, MatStepperModule],

  exports:      [ ...MATERIAL_MODULES, ...COMPONENTS, ...IMPORT_EXPORT],

  providers:    [...PROVIDERS ],

  bootstrap:    [ ]

})
export class SharedModule { }
