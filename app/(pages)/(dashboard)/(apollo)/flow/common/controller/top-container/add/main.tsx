import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function FlowAdd() {
  return (
    <Layer
      displayName={FlowAdd.name}
      sizeStyle="w-[200px] h-[200px]"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["col-centered"]}
    >
      <div className="w-[120px] h-[120px] bg-white"></div>
    </Layer>
  );
}
