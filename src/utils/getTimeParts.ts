export interface TimeParts {
  hours: number,
  minutes: number,
  seconds: number,
}

/**
 * Вычисляет количество часов, минут и секунд по входному параметру времени в секундах
 * @param time - время в секундах
 */
export const getTimeParts = (time:number):TimeParts => {
  const hours = Math.trunc(time / 3600);
  const minutes = Math.trunc((time - hours * 3600) / 60);
  const seconds = time - hours * 3600 - minutes * 60;

  return {
    hours,
    minutes,
    seconds,
  };
};
