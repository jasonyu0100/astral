import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function DraftLeftContainerAdd() {
  return (
    <Layer
      displayName={DraftLeftContainerAdd.name}
      sizeStyle="h-[160px] w-[160px]"
      backgroundStyle={backgroundStyles["glass-20"]}
      containerStyle={containerStyles["col-centered"]}
    >
      <div className="w-[100px] h-[100px] bg-slate-300 rounded-[50px]"></div>
    </Layer>
  );
}
