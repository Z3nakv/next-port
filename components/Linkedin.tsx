import Link from "next/link";
import { LinkedinIcon, LinkIcon } from "./Icons";

export default function Linkedin() {
    return (
        <div 
        className="relative bg-linkedin col-span-2 rounded-3xl cursor-pointer group overflow-hidden shadow-boxShadow
        md:row-span-2">
            <Link
            href={'https://www.linkedin.com/in/adrian-rivarola-43b388292'}
            target="_blank"
            className="hoverStyle"
            >
                <LinkIcon className="link-icon" fill="#fff" />
                <LinkedinIcon className="h-16 w-full col-start-2 " fill='#fff' />
            </Link>
        </div>
    )
}
