import Link from "next/link";
import { LinkIcon, MailIcon } from "./Icons";

export default function Message() {
  return (
    <div className="col-span-2 border border-black rounded-3xl cursor-pointer">
        <Link 
        href="mailto:ad.rivarola18@gmail.com" 
        target="_blank"
        className="hoverStyle"
        >
          <LinkIcon className="link-icon" fill="#fff" />
          <MailIcon className="h-10 w-10" fill="#000"/>
        </Link>
    </div>
  )
}
