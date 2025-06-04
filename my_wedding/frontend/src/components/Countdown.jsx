// src/components/Countdown.jsx

import { useEffect, useState } from 'react';

export default function Countdown() {
  const targetDate = new Date('2025-12-27T15:00:00');
  const [timeLeft, setTimeLeft] = useState(getRemainingTime());

  function getRemainingTime() {
    const now = new Date();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-purple-50 text-center">
      <h2 className="text-4xl font-bold text-purple-800 mb-4">Faltan...</h2>
      <div className="flex justify-center gap-8 text-purple-900 text-2xl font-medium">
        <TimeBox value={timeLeft.days} label="Días" />
        <TimeBox value={timeLeft.hours} label="Horas" />
        <TimeBox value={timeLeft.minutes} label="Minutos" />
        <TimeBox value={timeLeft.seconds} label="Segundos" />
      </div>
    </section>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="w-20 h-20 rounded-xl bg-white shadow-md flex flex-col justify-center items-center border border-purple-200">
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-sm text-purple-600">{label}</span>
    </div>
  );
}
