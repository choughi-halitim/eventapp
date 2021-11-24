import * as moment from 'moment';

export const getStartAndEndDatetimeHelper = (timezone: string,
                                             startDate: Date,
                                             startTime: string,
                                             endDate: Date,
                                             endTime: string): {start: string, end: string} => {

  const utc =  moment.tz(timezone).format('Z')

  let start = moment(startDate).set({

    hour: moment(startTime).hour(),

    minute: moment(startTime).minute(),

    second: 0

  }).utcOffset(utc, true);

  let end = moment(endDate).set({

    hour: moment(endTime ?? '00').hour(),

    minute: moment(endTime ?? '00').minute(),

    second: 0

  }).utcOffset(utc, true);

  return {
    start: start.toISOString(true),
    end: end.toISOString(true)
  }
}
