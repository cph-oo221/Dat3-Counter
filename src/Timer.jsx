import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  function startTimer() {
    setTimerOn(true);
    setTime(minutes * 60 + seconds);
  }

  function resetTimer() {
    setTimerOn(false);
    setTime(0);
    setSeconds(0);
    setMinutes(0);
  }

  function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  useEffect(() => {
    let interval = null;
    if (time === 0) {
      setTimerOn(false);
      clearInterval(interval);
    }

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!timerOn && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [time, timerOn]);

  return (
    <div>
      <h1>Timer</h1>

      <div>
        <h3>Time Remaining: {formatTime(time)}</h3>
      </div>

      <div>
        <input
          type="number"
          placeholder="Minutes"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
        />
        <input
          type="number"
          placeholder="Seconds"
          value={seconds}
          onChange={(e) => setSeconds(parseInt(e.target.value))}
        />
      </div>

      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
