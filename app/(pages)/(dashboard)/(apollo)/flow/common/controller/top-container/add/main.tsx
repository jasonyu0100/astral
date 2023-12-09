import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/texture/data";
import Texture from "@/(pages)/(dashboard)/(common)/texture/main";

export default function FlowAdd() {
  return (
    <Texture
      displayName={FlowAdd.name}
      sizeStyle="w-[200px] h-[200px]"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["col-centered"]}
    >
      <div className="w-[120px] h-[120px] bg-white"></div>
    </Texture>
  );
}
