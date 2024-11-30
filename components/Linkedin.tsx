import { LinkedinIcon, LinkIcon } from "./Icons";

export default function Linkedin() {
    return (
        <div className="relative bg-linkedin col-span-2 rounded-3xl cursor-pointer group overflow-hidden">
            <div className="hoverStyle">
                <LinkIcon className="link-icon" fill="#fff" />
                <LinkedinIcon className="h-12 w-12 col-start-2 " fill='#fff' />
            </div>
        </div>
    )
}
