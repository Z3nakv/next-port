import {ResumeIcon, LinkIcon } from "./Icons";

export default function Resume() {
  return (
    <div className="relative bg-resume aspect-square col-span-2 row-start-6 border border-black rounded-3xl">
        <div className="hoverStyle">
          <LinkIcon className="link-icon" fill="#000" />
          <ResumeIcon className="h-10 w-10 col-start-2" fill="#000" />
        </div>
    </div>
  )
}
