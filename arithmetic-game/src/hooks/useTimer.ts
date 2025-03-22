import { useEffect, useState } from "react";

export function useTimer(initialTime: number) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (!time) return;
    const timerId = setTimeout(() => setTime((prev) => prev - 1), 1000);
    return () => clearTimeout(timerId);
  }, [time]);

  const resetTimer = () => setTime(initialTime);

  return { time, setTime, resetTimer };
}
