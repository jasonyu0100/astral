import { FileObj } from "@/tables/collection/file/main";

export function CraftFolderGridElement({ file }: { file: FileObj }) {
  return (
    <div className="flex flex-row w-[400px] h-[150px] items-center space-x-[3rem]">
      <img src={file.src} className="w-[150px] h-[150px] rounded-full" />
      <div className="flex flex-col">
        <p className="text-white text-lg font-bold">{file.name}</p>
        <p className="text-white text-md">123 drafts - 3 weeks ago</p>
      </div>
    </div>
  );
}
