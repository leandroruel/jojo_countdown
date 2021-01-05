import React, { useEffect, useState } from 'react'

export default function Counter(props) {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(props.start) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
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
        <span className="text-xl text-gray-900 bg-gray-100 p-5 font-sans font-bold">
          {timeLeft[interval]}
        </span>
        <span className="text-sm font-bold uppercase text-gray-400">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <>
      <div className="grid grid-cols-3 mb-4">{timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
    </>
  )
}