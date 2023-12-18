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
      sizeStyle="flex-grow max-w-[500px] h-full"
      containerStyle={containerStyles["col-center"]}
      contentStyle="overflow-auto space-y-[2rem] p-[1rem]"
    >
      {children}
    </Layer>
  );
}
