/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
  saturday = "Saturday",
  sunday = "Sunday",
}

function isWeekend(weekDay: WeekDays): boolean {
  switch (weekDay) {
    case WeekDays.monday:
    case WeekDays.tuesday:
    case WeekDays.wednesday:
    case WeekDays.thursday:
    case WeekDays.friday:
      return false;
    case WeekDays.saturday:
    case WeekDays.sunday:
      return true;
  }
}

const today: WeekDays = WeekDays.monday;
console.log(`Is ${today} a weekend? ${isWeekend(today)}`);
