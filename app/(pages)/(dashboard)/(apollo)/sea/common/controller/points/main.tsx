import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function SeaPointsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={SeaPointsContainer.name}
      sizeStyle="h-[700px] w-[420px]"
      containerStyle={containerStyles["col-center"]}
      contentStyle="overflow-auto space-y-[20px] p-[10px]"
    >
      {children}
    </Layer>
  );
}
