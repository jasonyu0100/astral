import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function FlowAdd() {
  return (
    <Layer
      displayName={FlowAdd.name}
      sizeStyle="w-full h-[160px]"
      backgroundStyle={backgroundStyles["glass-30"]}
      containerStyle={containerStyles["col-centered"]}
    >
      <div className="w-[120px] h-[120px] bg-white"></div>
    </Layer>
  );
}
