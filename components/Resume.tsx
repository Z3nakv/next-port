import {ResumeIcon, LinkIcon } from "./Icons";

export default function Resume() {
  return (
    <div 
    className="relative col-span-2 row-start-6 rounded-3xl overflow-hidden shadow-boxShadow bg-[#0F4C75]
    md:row-span-2">
        <div className="hoverStyle">
          <LinkIcon className="link-icon" fill="#fff" />
          <div className="h-16 md:h-32">
            <a href="/Adriancv.pdf" download={'adriancv.pdf'} aria-label="descargar resume de Adrian Rivarola">
              <ResumeIcon className="h-full col-start-2" fill="#fff" />
            </a>
          </div>
        </div>
    </div>
  )
}
