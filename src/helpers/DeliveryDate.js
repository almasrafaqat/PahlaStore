

const DeliveryDate = (day) => {
    let date = new Date();
    var months = [
        'january',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Auguest',
        'Septemeber',
        'October',
        'November',
        'December',
      ];
      var days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]

    var monthName = months[date.getMonth()];
    var dayName = ( days[date.getDay()] + 5);
    var dayNumber = (date.getDate() + 5);
  return <span>{dayName}, {monthName} {dayNumber}</span>;
};

export default DeliveryDate;
