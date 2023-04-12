

const DeliveryDate = (day) => {
  let DeliveryDay = day? day : 7;
  var date = new Date();
  date.setDate(date.getDate() +DeliveryDay);


  /**Method 1 */

  // var months = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
  //   "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  // ];
  // var days = ["اﻷحد", "اﻷثنين", "الثلاثاء", "اﻷربعاء", "الخميس", "الجمعة", "السبت"];
  //var delDateString = days[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ', ' + date.getFullYear();

  //console.log(delDateString); // Outputs اﻷحد, 4 ديسمبر, 2016


  /**Methid 2 */

  // 1st method
  // let options = { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' };
  // let locales = ["ar-u-ca-islamic","ar-u-nu-latn"];
  // let locales = "ar-u-ca-islamic-nu-latn";
  // console.log(new Intl.DateTimeFormat(locales, options).format(Date.now()));

  // var months = [
  //     'january',
  //     'February',
  //     'March',
  //     'April',
  //     'May',
  //     'June',
  //     'July',
  //     'Auguest',
  //     'Septemeber',
  //     'October',
  //     'November',
  //     'December',
  //   ];
  //   var days = [
  //     'Sunday',
  //     'Monday',
  //     'Tuesday',
  //     'Wednesday',
  //     'Thursday',
  //     'Friday',
  //     'Saturday'
  //   ];


  var dayName = date.toLocaleDateString('en-SA', { weekday: 'long' });   // var dayName = ( days[date.getDay()]);
  var monthName = date.toLocaleString('en-SA', { month: 'long' });   // var monthName = months[date.getMonth()];
  var dayNumber = (date.getDate());

  return <span> {dayName}, {monthName} {dayNumber}</span>;
};

export default DeliveryDate;
