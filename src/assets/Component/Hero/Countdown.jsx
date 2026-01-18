import { useEffect, useState } from "react";

function Countdown({ initialMinutes = 30 }) {
  const [time, setTime] = useState(initialMinutes * 60);

  useEffect(() => {
    if (time <= 0) return;

    const timer = setInterval(() => {
      setTime(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <p className="expiry">
      Expires in: {minutes}:{seconds}
    </p>
  );
}

export default Countdown;
