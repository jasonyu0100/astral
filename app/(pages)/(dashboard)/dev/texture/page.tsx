import { backgroundStyles } from "../../../(common)/styles/data";
import Layer from "../../../(common)/layer/main";

export default function TexturePage() {
  return (
    <div className="flex flex-col">
      <Layer
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["glass-10"]}
      ></Layer>
    </div>
  );
}
