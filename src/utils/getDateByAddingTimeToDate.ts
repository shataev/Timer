export const getDateByAddingTimeToDate = (date: Date, diffInMs: number):Date => new Date(date.getTime() + diffInMs);
