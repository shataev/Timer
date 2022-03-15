import React, { useMemo, useState } from 'react';
import { Clock, Button } from './components';
import styles from './App.module.scss';
import { getDateByAddingTimeToDate } from './utils/getDateByAddingTimeToDate';
import { getTimeParts } from './utils';

const TIMER_DURATION_IN_MS = 30 * 60 * 1000;

export interface Timer {
  id: null | number,
  startDate: Date,
  endDate: Date,
  currentDate: Date,
}

function App() {
  const [timer, setTimer] = useState<Timer | null>(null);

  const createAndStartTimer = () => {
    const currentDate = new Date();

    const initialTimer = {
      id: null,
      startDate: currentDate,
      endDate: getDateByAddingTimeToDate(currentDate, TIMER_DURATION_IN_MS),
      currentDate,
    };

    const id = window.setInterval(() => {
      setTimer((prevState) => {
        if (!prevState?.id) {
          return prevState;
        }

        if (prevState.endDate <= prevState.currentDate) {
          clearInterval(prevState?.id);

          return null;
        }

        return {
          ...prevState,
          currentDate: new Date(),
        };
      });
    }, 1000);

    setTimer({
      ...initialTimer,
      id,
    });
  };

  const resetTimer = () => {
    if (timer?.id) {
      clearInterval(timer.id);
    }

    setTimer(null);
  };

  const getTime = useMemo(() => {
    let time = TIMER_DURATION_IN_MS;

    if (timer?.id) {
      time = timer.endDate.getTime() - timer.currentDate.getTime();
    }

    return getTimeParts(time);
  }, [timer]);

  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <Clock time={getTime} className={styles.AppClock} />
        <div className={styles.buttons}>
          <Button onClick={createAndStartTimer} text="Start" className={styles.startButton} />
          <Button onClick={resetTimer} text="Stop" />
        </div>
      </div>
    </div>
  );
}

export default App;
