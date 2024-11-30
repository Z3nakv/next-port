import Link from "next/link";
import { CartIcon, ChatIcon, NextflixIcon } from "./Icons";

export default function Projects() {
  return (
    <div className="componentStyle col-span-8 grid grid-cols-3 gap-4 place-content-center place-items-center  ">
        <div className="col-span-3 text-center font-bold text-3xl">
            <h2>Projects</h2>
        </div>
        <Link
        href={'https://next-flix-kappa.vercel.app/'} 
        className="h-24 w-24 hoverStyle"
        scroll={false}
        target="blank"
        >
            <NextflixIcon className="h-full w-full" fill="#fff" />
        </Link>
        <Link 
        href={'https://food-delivery-frontend-vq0w.onrender.com'}
        className="h-24 w-24 hoverStyle"
        scroll={false}
        target="blank"
        >
            <CartIcon className="h-full w-full" fill="#000" textFill="#fff"/>
        </Link>
        <Link 
        href={'https://chat-app-2edbe.web.app'}
        className="h-24 w-24 hoverStyle"
        scroll={false}
        target="blank"
        >
            <ChatIcon className="h-full w-full" fill="#fff" textFill="#000" />
        </Link>
    </div>
  )
}
