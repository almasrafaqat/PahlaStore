

const DeliveryDate = (day) => {
    let date = new Date();
    date.setDate(10);
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
      ];

    //   var options = { weekday: 'long' };
    //   var currentDate = date.toLocaleDateString('en-US')
    // var monthName = date.toLocaleString('en-US', {month: 'long'});
    // var dayName = date.toLocaleString('en-US', {day: 'long'});

    // var a = new Date();
    //     var weekdays = new Array(7);
    //     weekdays[0] = "Sunday";
    //     weekdays[1] = "Monday";
    //     weekdays[2] = "Tuesday";
    //     weekdays[3] = "Wednesday";
    //     weekdays[4] = "Thursday";
    //     weekdays[5] = "Friday";
    //     weekdays[6] = "Saturday";
    //     var r = (weekdays[a.getDay()]);


    var monthName = months[date.getMonth()];
    var dayName = ( days[date.getDay()]);
    var dayNumber = (date.getDate() + 5);
  return <span>{dayName}, {monthName} {dayNumber} | day is {}</span>;
};

export default DeliveryDate;
