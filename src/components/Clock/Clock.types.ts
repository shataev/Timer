export interface ClockProps {
  time: Time,
  className?: string,
}

export interface Time {
  hours: number,
  minutes: number,
  seconds: number,
}
