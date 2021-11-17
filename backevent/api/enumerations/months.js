module.exports.MONTH_ENUMS = {

  JANUARY :   { value: 1, name: 'January'   },

  FEBRUARY :  { value: 2, name: 'February'  },

  MARCH :     { value: 3, name: 'March'     },

  APRIL :     { value: 4, name: 'April'     },

  MAY :       { value: 5, name: 'May'       },

  JUNE :      { value: 6, name: 'June'      },

  JULY :      { value: 7, name: 'July'      },

  AUGUST :    { value: 8, name: 'August'    },

  SEPTEMBER : { value: 9, name: 'September' },

  OCTOBER :   { value: 10, name: 'October'  },

  NOVEMBER :  { value: 11, name: 'November' },

  DECEMBER :  { value: 12, name: 'December' }

};

module.exports.monthOyYears = (monthNumber) => {

  return _.find(MONTH_ENUMS, (month) => month.value === monthNumber) || null;

};
