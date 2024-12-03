'use client';
import { getTime, transformTime } from "@/utils/fetchData";
import { useState, useEffect } from "react";

type TypeHour = {
  hour: number;
  minutes: number;
  seconds: number;
};

export default function PageColorTheme() {
  const [time, setTime] = useState<TypeHour | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const { hour, minutes, seconds } = getTime();
      setTime({ hour, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // if (!time) {
  //   return <p className="text-white text-lg">Loading...</p>;
  // }

  return (
    <div className="text-white text-2xl col-span-2 flex justify-center items-center md:p-5 rounded-3xl font-bold select-none shadow-boxShadow bg-[#0F4C75]">
      {
        time 
        ? transformTime(time)
        : <p className="text-white text-lg">Loading...</p>
      }
    </div>
  );
}
