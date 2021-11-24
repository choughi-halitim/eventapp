import {TimeZoneService} from '@core/services/time-zone.service';
import * as momentTZ from 'moment-timezone'

describe('ValueService', () => {

  let timeZoneService: TimeZoneService;

  beforeEach(() => { timeZoneService = new TimeZoneService(); });

  it('#getTimeZoneBehaviorSubject should return empty', () => {

    expect(timeZoneService.getTimeZoneBehaviorSubject().value).toBe('');

  });

  it('#getTimeZoneBehaviorSubject should return empty', () => {

    timeZoneService.setTimeZoneBehaviorSubject(momentTZ.tz.guess());

    expect(timeZoneService.getTimeZoneBehaviorSubject().value).toBe(momentTZ.tz.guess());

  });

  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
      timeZoneService.setTimeZoneBehaviorSubject(momentTZ.tz.guess());

      timeZoneService.getTimeZoneBehaviorSubject().subscribe((value) => {
        expect(momentTZ.tz.guess()).toBe(momentTZ.tz.guess());
        done();
      });
    });


});
