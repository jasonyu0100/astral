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
      sizeStyle="max-w-[400px] min-w-[250px] w-1/4 h-full"
      containerStyle={containerStyles["col-center"]}
      backgroundStyle={backgroundStyles["glass-10"]}
      contentStyle="overflow-auto space-y-[2rem] p-[1rem]"
    >
      {children}
    </Layer>
  );
}
