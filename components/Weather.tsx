import { requestWeather } from "@/utils/fetchData";
import Image from "next/image";
import { Suspense } from "react";

const WeatherContent = async () => {
  const response = await requestWeather();
  return (
  <div className="grid grid-cols-4 md:h-full md:w-full">
    <>
      <div className="col-start-2 h-full w-full text-lg md:text-[30px] md:place-content-center md:flex md:flex-col md:items-center gap-10">
        <h2>{Math.floor(response?.main?.temp)}°C</h2>
        <p className="md:text-xl">Now</p>
      </div>
      <div className="relative col-span-2 animate-flying md:col-span-1 md:place-content-start">
        <Image
          src={`https://openweathermap.org/img/wn/${response?.weather[0].icon}@2x.png`}
          alt="weather image"
          fill
          sizes="20vw"
          className="h-auto w-auto"
        />
      </div>
    </>
  </div>
  )
}

export default function Weather() {
  
  return (
    <div
      className="flex justify-center items-center col-span-2 row-start-7 rounded-3xl font-bold select-none shadow-boxShadow bg-[#1B263B]
    md:col-start-5 md:row-start-5 md:col-span-4 md:aspect-[16/6]"
    >
      <Suspense fallback={<p className="text-white text-lg">Loading...</p>}>
        <WeatherContent />
      </Suspense>
    </div>
  );
}
