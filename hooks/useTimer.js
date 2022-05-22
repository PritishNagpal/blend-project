import { useState, useEffect } from "react";

export default function useTimer({ timerValue, callback, params }) {
  const [timer, setTimer] = useState(timerValue);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        callback(params);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [timer]);

  return {
    timer,
  };
}
