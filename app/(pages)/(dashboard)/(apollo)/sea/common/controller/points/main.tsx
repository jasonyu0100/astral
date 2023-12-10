import { backgroundStyles, containerStyles } from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function SeaPointsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={SeaPointsContainer.name}
      sizeStyle="h-[700px] w-[300px]"
      containerStyle={containerStyles["col-center"]}
      contentStyle="overflow-auto space-y-[30px]"
    >
      {children}
    </Layer>
  );
}
