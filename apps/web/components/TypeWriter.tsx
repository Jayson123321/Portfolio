'use client';
import { useState, useEffect, useRef } from 'react';

export default function TypeWriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const index = useRef(0);
  const deleting = useRef(false);
  const pause = useRef(0);

  useEffect(() => {
    const tick = setInterval(() => {
      if (pause.current > 0) {
        pause.current--;
        return;
      }

      if (!deleting.current) {
        index.current++;
        setDisplayed(text.slice(0, index.current));
        if (index.current === text.length) {
          deleting.current = true;
          pause.current = 12; // ~1.2s pauze na volledig typen
        }
      } else {
        index.current--;
        setDisplayed(text.slice(0, index.current));
        if (index.current === 0) {
          deleting.current = false;
          pause.current = 6; // ~0.6s pauze voor opnieuw typen
        }
      }
    }, 100);

    return () => clearInterval(tick);
  }, [text]);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible(v => !v), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <h1 className="text-3xl lg:text-4xl text-white font-bold mb-8">
      {displayed}
      <span className={cursorVisible ? 'opacity-100' : 'opacity-0'}>|</span>
    </h1>
  );
}
