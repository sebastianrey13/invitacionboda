import { useState, useEffect } from "react";

export default function Countdown() {
  const targetDate = new Date("2025-11-01T15:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <p className="countdown-label">F A L T A N</p>
      <div className="countdown-timer">
        <div className="time-box">
          <div className="time-value">{String(timeLeft.days).padStart(2, "0")}</div>
          <small>Días</small>
        </div>
        <span className="separator">:</span>
        <div className="time-box">
          <div className="time-value">{String(timeLeft.hours).padStart(2, "0")}</div>
          <small>Horas</small>
        </div>
        <span className="separator">:</span>
        <div className="time-box">
          <div className="time-value">{String(timeLeft.minutes).padStart(2, "0")}</div>
          <small>Minutos</small>
        </div>
        <span className="separator">:</span>
        <div className="time-box">
          <div className="time-value">{String(timeLeft.seconds).padStart(2, "0")}</div>
          <small>Segundos</small>
        </div>
      </div>
    </div>
  );
}