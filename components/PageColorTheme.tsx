import { SwitchIcons } from "./Icons";

export default function Time() {
  return (
    <div className="col-span-2 col-start-3 rounded-3xl flex justify-center items-center shadow-boxShadow bg-[#14213D]">
        <SwitchIcons className="h-20 w-full col-start-2 cursor-pointer" fill="#000" textFill="#fff" />
    </div>
  )
}