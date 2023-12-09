import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function DraftLeftContainerAdd() {
  return (
    <Layer
      displayName={DraftLeftContainerAdd.name}
      sizeStyle="h-[160px] w-[160px]"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["col-centered"]}
      borderStyle={borderStyles["border-b"]}
    >
      <div className="w-[100px] h-[100px] bg-slate-300 rounded-[50px]"></div>
    </Layer>
  );
}
