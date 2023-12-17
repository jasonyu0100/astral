import { backgroundStyles } from "../../../../(common)/styles/data";
import Layer from "../../../../(common)/layer/main";

export default function ColorPage() {
  return (
    <div className="flex flex-col">
      <Layer
        displayName="slate-900"
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-900"]}
      ></Layer>
      <Layer
        displayName="slate-800"
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-800"]}
      ></Layer>
      <Layer
        displayName="slate-700"
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-700"]}
      ></Layer>
      <Layer
        displayName="slate-600"
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-600"]}
      ></Layer>
      <Layer
        displayName="slate-500"
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-500"]}
      ></Layer>
      <Layer
        displayName="slate-400"
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-400"]}
      ></Layer>
      <Layer
        displayName="slate-300"
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-300"]}
      ></Layer>
      <Layer
        displayName="slate-200"
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-200"]}
      ></Layer>
      <Layer
        displayName="slate-100"
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-100"]}
      ></Layer>
      <Layer
        displayName="slate-50"
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["slate-50"]}
      ></Layer>
    </div>
  );
}
