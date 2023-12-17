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
      sizeStyle="h-full w-1/2 max-w-[750px]"
      containerStyle={containerStyles["col-center"]}
      contentStyle="overflow-auto space-y-[2rem] p-[1rem]"
    >
      {children}
    </Layer>
  );
}
