import React, { useEffect, useState } from 'react'

export default function Counter() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date('2021-04-04') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className="flex flex-col items-center p-4" key={index}>
        <span className="text-huge font-sans font-bold text-bg-gradient-blue">
          {timeLeft[interval]}
        </span>
        <span className="text-xl font-bold">
          {interval}
        </span>
      </div>
    );
  });

  return (
      <div className="flex flex-col rounded-lg bg-white p-5">
        <div className="p-4 border-b" id="featured">
          <h1 className="text-lg font-semibold mb-3 event-title">Joestar's inherited Soul</h1>
          <div className="grid grid-cols-4 mb-4">{timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
          <a href="#" className="btn btn--black">share this event</a>
        </div>
      </div>
  )
}