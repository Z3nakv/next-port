import Link from "next/link";
import { LinkIcon, MailIcon } from "./Icons";

export default function Message() {
  return (
    <div 
    className="relative col-span-2 col-start-1 row-start-3 rounded-3xl cursor-pointer overflow-hidden shadow-boxShadow bg-[#1E293B]
    md:row-start-4">
        <Link 
        href="mailto:ad.rivarola18@gmail.com"
        target="_blank"
        className="hoverStyle"
        aria-label="Enviar un correo a Adrian Rivarola"
        >
          <LinkIcon className="link-icon" fill="#fff" />
          <MailIcon className="h-16 w-full" fill="#fff"/>
        </Link>
    </div>
  )
}
