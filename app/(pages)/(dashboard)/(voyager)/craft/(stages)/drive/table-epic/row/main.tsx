"use client";
import { CraftTableName } from "./name/main";
import { CraftTableDescription } from "./description/main";
import { CraftTableMedia } from "./media/main";
import { CraftFile } from "../../../../model/drive/section/folder/file/main";

export function TableRow({
  name,
  description,
  src,
}: CraftFile) {
  return (
    <div className="flex flex-row divide-x-2 divide-slate-600 w-full">
      <CraftTableMedia src={src}/>
      <CraftTableName>
        {name}
      </CraftTableName>
      <CraftTableDescription>
        {description}
      </CraftTableDescription>
    </div>
  );
}
