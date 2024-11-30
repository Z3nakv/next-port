import Link from "next/link";
import { GithubIcon, LinkIcon } from "./Icons";

export default function Github() {
  
  return (
    <div className="relative col-span-4 componentStyle overflow-hidden p-0">
      <video 
      src="/gEKz4VLX7fQlsl8SFE.mp4"
       autoPlay loop muted
      className="absolute inset-0 object-fit z-[-1] w-full h-full object-fill"
      />
        <Link 
        href={"https://github.com/Z3nakv"}
        target="_blank"
        className="hoverStyle p-10"
        >
          <LinkIcon className="link-icon" fill="#fff"/>
          <GithubIcon className="h-20 w-20" fill="#fff" />
        </Link>
    </div>
  )
}
