import { useEffect, useState } from "react";

export function useCounter(target, active, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [active, duration, target]);

  return count;
}
