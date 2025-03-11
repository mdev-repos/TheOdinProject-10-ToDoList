import { format, parseISO, isBefore, addDays, differenceInDays } from 'date-fns';

export function dateFormatter (year, month, day, hour, min) {
  const dueDate = format(new Date(year, month, day, hour, min), 'MM/dd/yyyy HH:mm');
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
  const now = Date.now();
  const days = differenceInDays(dueDate, now);
  return days;
}