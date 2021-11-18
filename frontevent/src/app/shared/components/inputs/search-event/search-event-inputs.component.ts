import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({

  selector: 'app-search-event-inputs',

  templateUrl: './search-event-inputs.component.html',

  styleUrls: ['./search-event-inputs.component.sass'],

  encapsulation: ViewEncapsulation.None

})
export class SearchEventInputsComponent {

  @Input() type: string = '';

  eventSearchFormGroup: FormGroup;

  eventSearchCtrl: FormControl;

  startCtrl: FormControl;

  endCtrl: FormControl;


  constructor() {

    this.eventSearchFormGroup = new FormGroup({

      event: this.eventSearchCtrl = new FormControl(),

      start: this.startCtrl = new FormControl(),

      end: this.endCtrl = new FormControl(),

    });

  }

}
