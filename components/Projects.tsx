import Link from "next/link";
import { CartIcon, ChatIcon, NextflixIcon } from "./Icons";

export default function Projects() {
  return (
    <div 
    className="componentStyle p-10 col-span-8 grid grid-cols-3 gap-4 place-content-center place-items-center shadow-boxShadow bg-[#073B4C]
    md:col-span-6 md:col-start-3 md:p-10">
        <div className="col-span-3 text-center font-bold text-3xl">
            <h2 className="">Projects</h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 font-bold">
            <Link
            href={'https://next-flix-kappa.vercel.app/'}
            className="h-24 w-24 hoverStyle md:h-32 md:w-32"
            scroll={false}
            target="blank"
            aria-label="Ir al proyecto NEXTFlix"
            >
                <NextflixIcon className="h-full w-full" fill="#fff" />
            </Link>
            <h3>NEXTFlix</h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 font-bold">
            <Link
            href={'https://food-delivery-frontend-vq0w.onrender.com'}
            className="h-24 w-24 hoverStyle md:h-32 md:w-32"
            scroll={false}
            target="blank"
            aria-label="Ir al proyecto E-Commerce"
            >
                <CartIcon className="h-full w-full" fill="#fff" textFill="none"/>
            </Link>
            <h3>E-Commerce</h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 font-bold">
            <Link
            href={'https://chat-app-2edbe.web.app'}
            className="h-24 w-24 hoverStyle md:h-32 md:w-32"
            scroll={false}
            target="blank"
            aria-label="Ir al proyecto Chat-app"
            >
                <ChatIcon className="h-full w-full" fill="none" textFill="#fff" />
            </Link>
            <h3>Chat-app</h3>
        </div>
    </div>
  )
}
