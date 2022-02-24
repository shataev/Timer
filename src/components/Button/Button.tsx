import React, { FC } from 'react';
import cn from 'classnames';
import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

export const Button:FC<ButtonProps> = ({
  onClick,
  text,
  className,
}) => {
  const classNames = cn(styles.Button, className);

  return (
    <button onClick={onClick} className={classNames} type="button">{text}</button>
  );
};
