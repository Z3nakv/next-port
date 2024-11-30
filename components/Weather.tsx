import { requestWeather } from "@/utils/fetchData"


export default async function Weather() {

  const response = await requestWeather()
  
  return (
    <div className="aspect-square col-span-2 flex flex-col justify-center items-center border border-black rounded-3xl font-bold select-none">
        <h2>{Math.floor(response?.main?.temp)}°C</h2>
        <p>Now</p>
    </div>
  )
}
