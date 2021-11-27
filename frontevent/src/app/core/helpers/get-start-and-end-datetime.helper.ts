import * as moment from 'moment';

export const getStartAndEndDatetimeHelper = (timezone: string,
                                             startDate: Date,
                                             startTime: string,
                                             endDate: Date,
                                             endTime: string): {start: string, end: string} => {

  const utc =  moment.tz(timezone).format('Z')

  let start = moment(startDate)
    .hours(moment(startTime ?? '00').hours())
    .minutes(moment(startTime ?? '00').minutes())
    .seconds(0)
    .utcOffset(utc, true);

  let end = moment(endDate)
    .hours(moment(endTime ?? '00').hours())
    .minutes(moment(endTime ?? '00').minutes())
    .seconds(0).utcOffset(utc, true);

  return {
    start: start.toISOString(true),
    end: end.toISOString(true)
  }
}
