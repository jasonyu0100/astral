import { backgroundStyles } from "../../../(common)/layer/data";
import Layer from "../../../(common)/layer/main";

export default function ColorPage() {
  return (
    <div className="flex flex-col">
      <Layer
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-900"]}
      ></Layer>
      <Layer
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-800"]}
      ></Layer>
      <Layer
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-700"]}
      ></Layer>
      <Layer
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-600"]}
      ></Layer>
      <Layer
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-500"]}
      ></Layer>
      <Layer
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-400"]}
      ></Layer>
      <Layer
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-300"]}
      ></Layer>
      <Layer
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-200"]}
      ></Layer>
      <Layer
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-100"]}
      ></Layer>
      <Layer
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-50"]}
      ></Layer>
    </div>
  );
}

