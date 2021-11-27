import {getStartAndEndDatetimeHelper} from '@core/helpers/get-start-and-end-datetime.helper';
import * as moment from 'moment';

describe('#GetStartAndDateTimeHelper',  () => {

  it('should return getStartAndEndDatetimeHelper', () => {

    // UTC  + 1
    let timeZone = 'Europe/Paris';

    let startDate = moment('2020-01-01');

    let endDate = moment('2020-01-01');

    let startTime = startDate.set({hours: 12, minutes: 10});

    let endTime = endDate.set({hours: 13, minutes: 45});

    expect(getStartAndEndDatetimeHelper(timeZone, startDate.toDate(), startTime.toISOString(), endDate.toDate(), endTime.toISOString())).toEqual({

      start: '2020-01-01T12:10:00.000+01:00', end: '2020-01-01T13:45:00.000+01:00'

    });

  });

  it('should return getStartAndEndDatetimeHelper on other timezone (+10:00)', () => {

    // UTC  + 10
    let timeZone = 'Pacific/Chuuk';

    let startDate = moment('2020-01-01');

    let endDate = moment('2020-01-01');

    let startTime = startDate.set({hours: 12, minutes: 10});

    let endTime = endDate.set({hours: 13, minutes: 45});

    expect(getStartAndEndDatetimeHelper(timeZone, startDate.toDate(), startTime.toISOString(), endDate.toDate(), endTime.toISOString())).toEqual({

      start: '2020-01-01T12:10:00.000+10:00', end: '2020-01-01T13:45:00.000+10:00'

    });

  });

});
