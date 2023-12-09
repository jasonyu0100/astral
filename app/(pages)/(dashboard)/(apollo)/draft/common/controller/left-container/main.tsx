import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/texture/data";
import Texture from "@/(pages)/(dashboard)/(common)/texture/main";

export default function DraftLeftContainer() {
  return (
    <Texture displayName={DraftLeftContainer.name} sizeStyle="h-[full] w-[160px]">
      <Texture
        sizeStyle="h-[160px] w-[160px]"
        backgroundStyle={backgroundStyles["glass-10"]}
        containerStyle={containerStyles["col-centered"]}
        borderStyle={borderStyles["border-b"]}
      >
        <div className="w-[100px] h-[100px] bg-slate-300 rounded-[50px]"></div>
      </Texture>
      <Texture
        sizeStyle="w-[160px] h-[540px]"
        backgroundStyle={backgroundStyles["glass-10"]}
        containerStyle={containerStyles["col-center"]}
        contentStyle="overflow-auto pt-[20px] space-y-[20px]"
      >
        <div className="w-[120px] h-[160px] bg-slate-400"></div>
        <div className="w-[120px] h-[160px] bg-slate-400"></div>
      </Texture>
    </Texture>
  );
}
