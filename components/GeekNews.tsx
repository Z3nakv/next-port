import { fetchData } from "@/utils/fetchData"
import Image from "next/image";
import { LinkIcon } from "./Icons";
import Link from "next/link";

export default async function GeekNews() {
  const response = await fetchData()
// console.log(response);
// const response = {
//   articles: [
//     {
//       image: '', // URL o ruta de la imagen
//       title: '', // Título del artículo
//       source: {
//         url: '' // URL de la fuente
//       }
//     }
//   ]
// };

  return (
    <div className="relative col-span-4 componentStyle overflow-hidden p-0 shadow-boxShadow">
        {response?.articles && 
        <Image
        src={response?.articles[0].image}
        alt={response?.articles[0].title}
        fill
        sizes="50vw"
        className="z-[-1] h-full w-full brightness-75"
        />}
      <Link
      href={response?.articles[0].source.url} 
      className="hoverStyle p-5"
      target="_blank"
      >
        <LinkIcon className="link-icon" fill="#fff"/>
          {
          response.articles ? 
          <h2 className="text-lg md:text-3xl">{response?.articles[0].title}</h2>
          : <p className="text-lg ">More news soon!</p>
        }
      </Link>
    </div>
  )
}
