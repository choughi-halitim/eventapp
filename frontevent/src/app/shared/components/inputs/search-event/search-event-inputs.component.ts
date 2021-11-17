import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-event-inputs',
  templateUrl: './search-event-inputs.component.html',
  styleUrls: ['./search-event-inputs.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class SearchEventInputsComponent implements OnInit {

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

  ngOnInit() {

  }

  displayObjectFn(): string {

    return '';

  }

  displayLocationFn(): string {

    return '';

  }
}
