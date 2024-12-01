import { JsIcon, NextjsIcon, ReactjsIcon, NodeIcon, CSSIcon, TailwindIcon, MongoDBIcon, PostgresSQLIcon, GitIcon } from "./Icons";

export default function TechnoSkills() {
  return (
    <div 
    className="relative grid grid-cols-3 col-span-4 row-start-2 row-end-4 col-end-[-1] gap-2 rounded-3xl p-5 overflow-hidden shadow-boxShadow
    md:row-start-1 md:row-end-2 md:col-start-6">
      <video 
      src="/matrix.mp4" 
      autoPlay loop muted
      className="absolute inset-0 object-fit z-[-1] w-full h-full object-fill brightness-75"
      />
      <NextjsIcon className="tech-icon-style max-h-28" fill="#39ff14" />
      <ReactjsIcon className="tech-icon-style  max-h-28" fill="#39ff14" />
      <JsIcon className="tech-icon-style  max-h-28" fill="#39ff14" textFill='#000' />
      <NodeIcon className="tech-icon-style  max-h-28" fill="#39ff14" />
      <CSSIcon className="tech-icon-style  max-h-28" fill="#39ff14" />
      <TailwindIcon className="tech-icon-style  max-h-28" fill="#39ff14" />
      <MongoDBIcon className="tech-icon-style  max-h-28" fill="#39ff14" textFill="#000" />
      <PostgresSQLIcon className="tech-icon-style  max-h-28" fill="#39ff14" />
      <GitIcon className="tech-icon-style  max-h-28" fill="#39ff14" />
    </div>
  );
}