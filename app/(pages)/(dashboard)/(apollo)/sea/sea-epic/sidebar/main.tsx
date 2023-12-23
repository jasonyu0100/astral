import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function SeaSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={SeaSidebar.name}
      sizeStyle="w-[350px] h-full"
      containerStyle={containerStyles["col-center"]}
      backgroundStyle={backgroundStyles["glass-10"]}
      contentStyle="overflow-auto space-y-[2rem] p-[1rem]"
      borderStyle={borderStyles["border-l"]}
    >
      {children}
    </Layer>
  );
}
