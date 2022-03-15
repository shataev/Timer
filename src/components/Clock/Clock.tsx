import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Clock.module.scss';
import { ClockProps } from './Clock.types';
import { prependZero } from '../../utils/prependZero';

/**
 * Компонент вывода оставшегося времени
 * @param time - объект с часами, минутами и секундами
 * @param className - класснейм, использующийся для позиционирования
 * @constructor
 */
export const Clock:FC<ClockProps> = ({ time, className }) => {
  const classNames = cn(styles.Clock, className);

  return (
    <div className={classNames}>
      { time.hours > 0 && (
      <div>
        { prependZero(time.hours) }
        :
      </div>
      ) }
      <div>{ prependZero(time.minutes) }</div>
      :
      <div>{ prependZero(time.seconds) }</div>
    </div>
  );
};
