import { backgroundStyles, borderStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function SeaPoint({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={SeaPoint.name}
      sizeStyle="w-full h-[150px]"
      backgroundStyle={backgroundStyles["glass-5"]}
      borderStyle={`${borderStyles["border-all"]} ${borderStyles.rounded}`}
      contentStyle="p-[20px] text-white"
    >
      {children}
    </Layer>
  );
}
