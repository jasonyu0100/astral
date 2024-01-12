import { FileObj } from "@/tables/collection/file/main";

export function CollectionFile({ file }: { file: FileObj }) {
  return (
    <div className="flex flex-row h-[150px] aspect-[36/16] items-center space-x-[3rem]">
      <img src={file.src} className="w-[150px] h-[150px] rounded-full" />
      <div className="flex flex-col">
        <p className="text-slate-300 text-xl font-bold">{file.name}</p>
        <p className="text-slate-400 text-lg font-bold">{file.type}</p>
        <p className="text-slate-400 text-lg font-bold">{file.description}</p>
      </div>
    </div>
  );
}
