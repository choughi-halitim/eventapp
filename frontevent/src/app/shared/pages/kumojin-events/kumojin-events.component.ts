import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KumojinEventInterface } from '@core/interfaces/kumojin-event.interface';
import { KumojinEventService } from '@core/services/kumojin-event.service';
import { HttpResponseGetAllInterface } from '@core/interfaces/http-response-get-all.interface';
import { TimeZoneService } from '@core/services/time-zone.service';
import {of, Subscription, switchMap, tap} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {HttpParams} from '@angular/common/http';

@Component({

  templateUrl: 'kumojin-events.component.html',

  styleUrls: [ 'kumojin-events.component.sass' ],

})
export class KumojinEventsComponent implements OnInit, OnDestroy {

  eventSearchCtrl: FormControl = new FormControl();

  kumojinEvents: KumojinEventInterface[] = [];

  updateEventSubscription!: Subscription;

  constructor(private _eventService: KumojinEventService,

              private _activatedRoute: ActivatedRoute,

              private _timezoneService: TimeZoneService,

              private _kumojinEventService: KumojinEventService,

  ) { }

  ngOnInit(): void {

    this._activatedRoute.data.subscribe((data) => {

      const { kumojinEvents } = data;

      const { rows } = kumojinEvents as HttpResponseGetAllInterface<KumojinEventInterface>;

      this.kumojinEvents = rows ?? [];

    });

    // Je remet à jour ma liste d'évenements si un event update est émit du service KumojinEvent
    this.updateEventSubscription = this._kumojinEventService.updateEvent.subscribe((value) => {

      this._kumojinEventService.getAll().subscribe((response) => {

        const { count, rows } = response;

        this.kumojinEvents = rows ?? [];

      });

    });

    // Possibilité d'ameliorer l'implementation mais suffusant pour l'exemple
    this.eventSearchCtrl.valueChanges.subscribe( query => {

      this._kumojinEventService.getAll( new HttpParams().set('queryFilter', query)).subscribe(((response) => {

        const { rows } = response;

        this.kumojinEvents = rows ?? [];

      }));

    });

  }

  ngOnDestroy() {

    if (this.updateEventSubscription) {

      this.updateEventSubscription.unsubscribe();

    }

  }

}
