export interface TimeParts {
  hours: number,
  minutes: number,
  seconds: number,
}

/**
 * Вычисляет количество часов, минут и секунд по входному параметру времени в миллисекундах
 * @param time - время в миллисекундах
 */
export const getTimeParts = (time:number):TimeParts => {
  const hours = Math.trunc(time / 3600000);
  const minutes = Math.trunc((time - hours * 3600000) / 60000);
  const seconds = Math.ceil((time - hours * 3600000 - minutes * 60000) / 1000);

  return {
    hours,
    minutes,
    seconds,
  };
};
