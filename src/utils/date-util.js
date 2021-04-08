import moment from 'moment';

export function convertToFriendlyTime(rawTime) {
  const rawTimeMoment = moment(rawTime);
  const todaysDate = moment().format('YYYY[-]MM[-]DD');

  const rawTimeDate = rawTimeMoment.format('YYYY[-]MM[-]DD');

  if (todaysDate === rawTimeDate) return rawTimeMoment.format('h:mm A');
  return rawTimeMoment.calendar();
}

export function isTodaysDate(rawTime) {
  const rawTimeMoment = moment(rawTime);
  const todaysDate = moment().format('YYYY[-]MM[-]DD');

  return rawTimeMoment.format('YYYY[-]MM[-]DD') === todaysDate;
}
