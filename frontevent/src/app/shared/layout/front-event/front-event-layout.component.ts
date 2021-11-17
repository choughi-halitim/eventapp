import {Component, Input, OnInit} from '@angular/core';

@Component({

  selector: 'app-front-event-layout',

  templateUrl: 'front-event-layout.component.html',

  styleUrls: [ 'front-event-layout.component.sass' ],

})
export class FrontEventLayoutComponent implements OnInit {

  @Input() title!: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
