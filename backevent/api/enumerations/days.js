'use strict';

module.exports.DAY_ENUMS = {

  MONDAY :    { value: 1, name: 'Monday'    },

  THUESDAY :  { value: 2, name: 'Thuesday'  },

  WEDNESDAY : { value: 3, name: 'Wednesday' },

  THURSDAY :  { value: 4, name: 'Thursday'  },

  FRIDAY :    { value: 5, name: 'Friday'    },

  SATURDAY :  { value: 6, name: 'Saturday'  },

  SUNDAY :    { value: 7, name: 'Sunday'    }

};

module.exports.dayOfWeek = (dayNumber) => {

  return _.find(DAY_ENUMS, (day) => day.value === dayNumber) || null;

};
