import { useEffect, useRef, useState } from "react";

export default function Typewriter({ text = "", speed = 70 }) {
  const [out, setOut] = useState("");
  const genRef = useRef(0);
  const timerRef = useRef(null);
  const iRef = useRef(0);

  useEffect(() => {
    genRef.current += 1;
    const myGen = genRef.current;
    if (timerRef.current) clearTimeout(timerRef.current);
    iRef.current = 0;
    setOut("");

    const step = () => {
      if (genRef.current !== myGen) return;
      iRef.current += 1;
      setOut(text.slice(0, iRef.current));
      if (iRef.current < text.length) {
        timerRef.current = setTimeout(step, speed);
      }
    };

    step();

    return () => {
      genRef.current += 1;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text, speed]);

  return <>{out}</>;
}