"use client";
import { TableRowName } from "./name/main";
import { TableRowDescription } from "./description/main";
import { TableRowMedia } from "./media/main";
import { CraftFile } from "../../../../../../model/drive/section/folder/file/main";

export function TableRow({
  name,
  description,
  src,
}: CraftFile) {
  return (
    <div className="flex flex-row divide-x-2 divide-slate-600 w-full">
      <TableRowMedia src={src}/>
      <TableRowName>
        {name}
      </TableRowName>
      <TableRowDescription>
        {description}
      </TableRowDescription>
    </div>
  );
}
