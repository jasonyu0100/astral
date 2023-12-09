import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(dashboard)/(common)/texture/data";
import Texture from "@/(pages)/(dashboard)/(common)/texture/main";

export default function DraftLeftContainerAdd() {
  return (
    <Texture
      displayName={DraftLeftContainerAdd.name}
      sizeStyle="h-[160px] w-[160px]"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["col-centered"]}
      borderStyle={borderStyles["border-b"]}
    >
      <div className="w-[100px] h-[100px] bg-slate-300 rounded-[50px]"></div>
    </Texture>
  );
}
