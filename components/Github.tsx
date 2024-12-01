import Link from "next/link";
import { GithubIcon, LinkIcon } from "./Icons";

export default function Github() {
  
  return (
    <div 
    className="relative col-span-4 componentStyle overflow-hidden shadow-boxShadow
    md:row-start-2 md:row-span-2 md:col-start-5 md:aspect-[16/6] p-0">
      <video 
      src="/gEKz4VLX7fQlsl8SFE.mp4"
       autoPlay loop muted
      className="absolute inset-0 object-fit z-[-1] w-full h-[111%] object-fill filter -hue-rotate-90"
      />
        <Link 
        href={"https://github.com/Z3nakv"}
        target="_blank"
        className="hoverStyle flex justify-center p-20 h-full w-full"
        >
          <LinkIcon className="link-icon" fill="#fff"/>
          <GithubIcon className="h-20 w-20 md:h-32 md:w-32" fill="#fff" />
        </Link>
    </div>
  )
}
