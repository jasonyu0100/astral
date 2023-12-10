import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function FlowAdd() {
  return (
    <Layer
      displayName={FlowAdd.name}
      sizeStyle="w-[260px] h-[160px]"
      backgroundStyle={backgroundStyles["glass-30"]}
      borderStyle={`${borderStyles["border-b"]} ${borderStyles["border-l"]}`}
      containerStyle={containerStyles["col-centered"]}
    >
      <div className="w-[120px] h-[120px] bg-white"></div>
    </Layer>
  );
}
