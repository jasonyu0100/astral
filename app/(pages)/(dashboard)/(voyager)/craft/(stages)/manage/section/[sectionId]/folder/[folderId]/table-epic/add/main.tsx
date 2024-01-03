"use client";
import { TableRowNameEdit } from "./name-edit/main";
import { TableRowDescriptionEdit } from "./description-edit/main";
import { TableRowMediaUpload } from "./media-upload/main";
import { CraftFile } from "../../../../../../../../model/drive/section/folder/file/main";

export function TableRowAdd({
  name,
  description,
  src,
}: CraftFile) {
  return (
    <div className="flex flex-row divide-x-2 divide-slate-600 w-full">
      <TableRowMediaUpload src={src}/>
      <TableRowNameEdit>
        {name}
      </TableRowNameEdit>
      <TableRowDescriptionEdit>
        {description}
      </TableRowDescriptionEdit>
    </div>
  );
}
