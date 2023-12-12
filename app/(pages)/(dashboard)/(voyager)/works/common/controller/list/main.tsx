import { backgroundStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function GalleryList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      sizeStyle="w-full h-full"
      displayName={GalleryList.name}
      containerStyle={containerStyles["col-center"]}
      backgroundStyle={backgroundStyles["glass-10"]}
      contentStyle="divide-y-[2px] divide-slate-700 py-[10px] overflow-auto"
    >
      {children}
    </Layer>
  );
}
