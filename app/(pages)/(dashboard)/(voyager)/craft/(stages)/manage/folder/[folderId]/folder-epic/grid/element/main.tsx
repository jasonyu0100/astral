import { CraftFile } from "@/(pages)/(dashboard)/(voyager)/craft/model/drive/section/folder/file/main";

export function CraftFolderGridElement({ file }: { file: CraftFile }) {
  return (
    <div className="flex flex-col items-center space-y-[2rem]">
      <img src={file.src} className="w-[200px] h-[200px] rounded-full" />
      <p className="text-white text-lg font-bold">{file.name}</p>
    </div>
  );
}
