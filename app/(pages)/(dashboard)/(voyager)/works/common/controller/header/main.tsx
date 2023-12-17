import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function WorksHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      sizeStyle="w-full h-[300px]"
      displayName={WorksHeader.name}
      containerStyle={containerStyles["row-center"]}
      borderStyle={borderStyles["border-b"]}
      backgroundStyle={backgroundStyles["glass-20"]}
      contentStyle="justify-between px-[100px]"
    >
      {children}
    </Layer>
  );
}
