"use client";
import CraftTableName from "./name/main";
import CraftTableDescription from "./description/main";
import CraftTableMedia from "./media/main";


export interface CraftTableRowProps {
  name: string;
  description: string;
  src: string;
}

export interface CraftSection {
  title: string;
  rows: CraftTableRowProps[];
  description: string;
}

export default function CraftTableRow({
  name,
  description,
  src,
}: CraftTableRowProps) {
  return (
    <div className="flex flex-row divide-x-2 divide-slate-600 w-full">
      <CraftTableName>
        {name}
      </CraftTableName>
      <CraftTableDescription>
        {description}
      </CraftTableDescription>
      <CraftTableMedia src={src}/>
    </div>
  );
}
