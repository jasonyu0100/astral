import { useEffect, useState } from 'react';

interface ControllerState {
  timeDilation: number;
  timeElapsed: number;
  timerDuration: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface ControllerActions {
  updateTimerDuration: (time: number) => void;
  updateTimeDilation: (time: number) => void;
  resetTimer: (newDuration: number) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export function useControllerForTimer(initialHours?: number): Controller {
  const [timerDuration, setTimerDuration] = useState(initialHours || 60);
  const [timeDilation, setTimeDilation] = useState(1);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const currentTime = timerDuration - timeElapsed;
  const hours = Math.floor(currentTime / 60 / 60);
  const minutes = Math.floor(currentTime / 60) % 60;
  const seconds = currentTime % 60;

  const state: ControllerState = {
    timeDilation,
    timeElapsed,
    timerDuration,
    hours,
    minutes,
    seconds,
  };

  function resetTimer(newDuration: number) {
    setTimeElapsed(0);
    setTimerDuration(newDuration);
  }

  useEffect(() => {
    if (initialHours) {
      setTimeElapsed(0);
      setTimerDuration(initialHours * 60 * 60);
    } else {
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const originalTime = new Date();
      const timeElapsed = Math.round(
        (midnight.getTime() - originalTime.getTime()) / 1000,
      );
      setTimeElapsed(0);
      setTimerDuration(timeElapsed);
    }
  }, [initialHours]);

  useEffect(() => {
    const duration =
      timeDilation === 0
        ? Math.pow(10, 10)
        : Math.floor(1000 / Math.abs(timeDilation));
    setTimeout(() => {
      if (timeDilation < 0) {
        setTimeElapsed(timeElapsed - 1);
      } else {
        setTimeElapsed(timeElapsed + 1);
      }
    }, duration);
  });

  const actions = {
    updateTimerDuration: (time: number) => setTimerDuration(time),
    updateTimeDilation: (time: number) => setTimeDilation(time),
    resetTimer: resetTimer,
  };

  return {
    state,
    actions,
  };
}
