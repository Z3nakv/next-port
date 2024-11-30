'use client';
import { getTime } from "@/utils/fetchData"; // Asegúrate de que esta función esté definida y exportada correctamente.
import { useState, useEffect } from "react";

type TypeHour = {
  hour: number;
  minutes: number;
  seconds: number;
};

export default function PageColorTheme() {
  const [time, setTime] = useState<TypeHour | null>(null); // Inicializa el estado como null

  // Función para transformar la hora en formato de cadena
  const transformTime = (time: TypeHour) => {
    const hour = time.hour.toString().padStart(2, "0");
    const minutes = time.minutes.toString().padStart(2, "0");
    const seconds = time.seconds.toString().padStart(2, "0");

    return `${hour}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const { hour, minutes, seconds } = getTime(); // Llama a la función para obtener la hora
      setTime({ hour, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  if (!time) {
    return null; // Muestra nada si `time` aún no está disponible
  }

  return (
    <div className="col-span-2 flex justify-center items-center border border-black rounded-3xl font-bold select-none">
      {transformTime(time)}
    </div>
  );
}
