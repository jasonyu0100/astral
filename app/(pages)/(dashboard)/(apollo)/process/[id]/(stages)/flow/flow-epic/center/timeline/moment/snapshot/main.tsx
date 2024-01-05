import { Layer } from "@/(pages)/(common)/layer/main";
import {
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { CraftFile } from "@/(pages)/(dashboard)/(voyager)/craft/model/drive/section/folder/file/main";

export function FlowMomentSnapshot({
  flowSnapshot: flowSnapshot,
}: {
  flowSnapshot: CraftFile;
}) {
  return (
    <Layer
      displayName={FlowMomentSnapshot.name}
      sizeStyle="w-[160px] h-[200px]"
      backgroundStyle={"bg-white"}
      contentStyle="p-[10px]"
      containerStyle={containerStyles["col-center"]}
    >
      <div className="w-[140px] h-[140px]">
        <img src={flowSnapshot.src} className="w-full h-full"></img>
      </div>
      <div className="h-[40px] w-full flex items-center justify-center">
        <p className="font-md font-extraBold">Hello World</p>
      </div>
    </Layer>
  );
}
