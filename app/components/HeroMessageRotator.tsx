"use client";

import { useEffect, useState } from "react";

const messages = [
  "Quality laptops for work, school, and business",
  "Tested systems with warranty support",
  "Corporate laptop supply made simple",
  "RAM and SSD upgrade support",
  "Reliable laptop sourcing for professionals",
];

export function HeroMessageRotator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % messages.length);
    }, 3400);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center px-6 lg:flex">
      <div className="max-w-4xl rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-center text-sm font-semibold text-cyan-100/90 shadow-2xl shadow-black/20 backdrop-blur">
        <span className="mr-3 inline-block h-2 w-2 rounded-full bg-cyan-300/80" />
        {messages[active]}
      </div>
    </div>
  );
}