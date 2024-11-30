import { fetchData } from "@/utils/fetchData"
import Image from "next/image";

export default async function GeekNews() {
  const response = await fetchData()
  
  return (
    <div className="relative col-span-4 componentStyle overflow-hidden p-0">
        {response?.articles && 
        <Image
        src={response?.articles[0].image}
        alt={response?.articles[0].title}
        fill
        sizes="50vw"
        className="z-[-1] h-full w-full"
        />}
      <div 
      className="hoverStyle bg-black bg-opacity-40 p-5">
          {
          response.articles ? 
          <h2 className="text-lg text-white">{response?.articles[0].title}</h2>
          : <p className="text-lg text-white">More news soon!</p>
        }
      </div>
    </div>
  )
}
