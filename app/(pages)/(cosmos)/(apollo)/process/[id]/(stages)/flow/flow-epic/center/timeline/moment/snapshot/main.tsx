import { Layer } from "@/(pages)/(common)/layer/main";
import { containerStyles } from "@/(pages)/(common)/styles/data";
import { CraftFile } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/folder/file/main";

export function FlowMomentSnapshot({
  flowSnapshot: flowSnapshot,
}: {
  flowSnapshot: CraftFile;
}) {
  return (
    <div className="h-[200px] aspect-[13/16] flex flex-col items-center bg-white p-[15px]">
      <img src={flowSnapshot.src} className="w-full aspect-square"></img>
      <div className="h-full w-full flex items-center justify-center">
        <p className="font-md font-extraBold">Hello World</p>
      </div>
    </div>
  );
}
