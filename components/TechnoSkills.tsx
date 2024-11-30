import { JsIcon, NextjsIcon, ReactjsIcon, NodeIcon, CSSIcon, TailwindIcon, MongoDBIcon, PostgresSQLIcon, GitIcon } from "./Icons";

export default function TechnoSkills() {
  return (
    <div className="relative grid grid-cols-3 col-span-4 gap-2 border border-black rounded-3xl p-5 overflow-hidden">
      <video 
      src="/matrix.mp4" 
      autoPlay loop muted
      className="absolute inset-0 object-fit z-[-1] w-full h-full object-fill"
      />
      <NextjsIcon className="tech-icon-style" fill="#fff" />
      <ReactjsIcon className="tech-icon-style" fill="#fff" />
      <JsIcon className="tech-icon-style" fill="#fff" textFill='#000' />
      <NodeIcon className="tech-icon-style" fill="#fff" />
      <CSSIcon className="tech-icon-style" fill="#fff" />
      <TailwindIcon className="tech-icon-style" fill="#fff" />
      <MongoDBIcon className="tech-icon-style" fill="#fff" textFill="#000" />
      <PostgresSQLIcon className="tech-icon-style" fill="#fff" />
      <GitIcon className="tech-icon-style" fill="#fff" />
    </div>
  );
}