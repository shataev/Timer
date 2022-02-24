/**
 * Добавляет 0 перед полученном в качестве аргумента числом, если оно меньше 10
 * @param num
 */
export const prependZero = (num:number):string => (num < 10 ? `0${num}` : `${num}`);
