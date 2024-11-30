
import GeekNews from "@/components/GeekNews";
import Github from "@/components/Github";
import Introduction from "@/components/Introduction";
import Linkedin from "@/components/Linkedin";
import Message from "@/components/Message";
import PageColorTheme from "@/components/PageColorTheme";
import Presentation from "@/components/Presentation";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import TechnoSkills from "@/components/TechnoSkills";
import Time from "@/components/Time";
import Weather from "@/components/Weather";


export default function page() {
  return (
    <div className="grid grid-cols-8 gap-3 p-5">
      <Introduction />
      <div className="col-span-4 grid grid-cols-4 gap-2">
        <Linkedin />
        <Time />
        <PageColorTheme />
        <Message />
      </div>
      <TechnoSkills />
      <Projects />
      <GeekNews />
      <Github />
      <Weather />
      <Resume />
      <Presentation />
    </div>
  )
}
