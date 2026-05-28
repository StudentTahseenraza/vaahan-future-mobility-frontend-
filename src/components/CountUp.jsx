// src/components/CountUp.jsx
import { useEffect, useState } from 'react';
import { useMotionValue, useTransform, animate } from 'framer-motion';

const CountUp = ({ end, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const countValue = useMotionValue(0);
  const rounded = useTransform(countValue, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(countValue, end, { duration, ease: 'easeOut' });
    return controls.stop;
  }, [countValue, end, duration]);

  useEffect(() => {
    const unsubscribe = rounded.onChange((latest) => {
      setCount(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
};

export default CountUp;