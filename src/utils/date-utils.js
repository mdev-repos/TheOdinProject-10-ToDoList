import { format, parseISO, isBefore, addDays, differenceInDays } from 'date-fns';

export function dateFormatter (year, month, day) {
  const dueDate = format(new Date(year, month, day), 'MM/dd/yyyy');
  return dueDate;
};

export function dateComparer (date, compareDate) {
  if(isBefore(date, compareDate)){
    return true;
  } else { return false } 
};

export function changeDue (oldDueDate, daysToAdd) {
  const newDue = addDays(oldDueDate, daysToAdd);
  return newDue;
};

export function getRemainingDays (dueDate) {
  const today = new Date();
  const formattedToday = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
  const days = differenceInDays(dueDate, formattedToday);
  return days;
}