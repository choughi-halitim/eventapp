import { Component, Input } from '@angular/core';

@Component({

  selector: 'app-front-event-layout',

  templateUrl: 'front-event-layout.component.html',

  styleUrls: [ 'front-event-layout.component.sass' ],

})
export class FrontEventLayoutComponent {

  @Input() title!: string;

  constructor() {
  }

}
