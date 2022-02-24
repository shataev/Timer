import React, { useState } from 'react';
import { Clock, Button } from './components';
import styles from './App.module.scss';

const TIMER_DURATION_IN_S = 30 * 60;

function App() {
  const [time, setTime] = useState(TIMER_DURATION_IN_S);
  const [timerId, setTimerId] = useState(-1);

  const buttonStartClickHandler = () => {
    const timer = window.setInterval(() => {
      setTime((prevState) => prevState - 1);
    }, 1000);

    setTimerId(timer);
  };

  const buttonStopClickHandler = () => {
    clearInterval(timerId);
    setTimerId(-1);
    setTime(TIMER_DURATION_IN_S);
  };

  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <Clock time={time} className={styles.AppClock} />
        <div className={styles.buttons}>
          <Button onClick={buttonStartClickHandler} text="Start" className={styles.startButton} />
          <Button onClick={buttonStopClickHandler} text="Stop" />
        </div>
      </div>
    </div>
  );
}

export default App;
