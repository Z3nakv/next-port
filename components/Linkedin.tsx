import { LinkedinIcon, LinkIcon } from "./Icons";

export default function Linkedin() {
    return (
        <div 
        className="relative bg-linkedin col-span-2 rounded-3xl cursor-pointer group overflow-hidden shadow-boxShadow
        md:row-span-2">
            <div className="hoverStyle">
                <LinkIcon className="link-icon" fill="#fff" />
                <LinkedinIcon className="h-16 w-full col-start-2 " fill='#fff' />
            </div>
        </div>
    )
}
