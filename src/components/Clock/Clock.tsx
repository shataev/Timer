import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Clock.module.scss';
import { ClockProps } from './Clock.types';
import { getTimeParts } from '../../utils';
import { prependZero } from '../../utils/prependZero';

export const Clock:FC<ClockProps> = ({ time, className }) => {
  const timeParts = getTimeParts(time);
  const classNames = cn(styles.Clock, className);

  return (
    <div className={classNames}>
      { timeParts.hours > 0 && (
      <div>
        { prependZero(timeParts.hours) }
        :
      </div>
      ) }
      <div>{ prependZero(timeParts.minutes) }</div>
      :
      <div>{ prependZero(timeParts.seconds) }</div>
    </div>
  );
};
