import React from "react";
interface Props {
  caption: string;
  title: string;
}
export default function SectionHeader({ caption, title }: Props) {
  return (
    <div>
      <h6 className="text-[#EF6D58]">{caption}</h6>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-12">
        {title}
      </h2>
    </div>
  );
}
