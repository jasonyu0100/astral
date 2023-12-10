import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function SeaPointsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={SeaPointsContainer.name}
      sizeStyle="h-[700px] w-[500px]"
      containerStyle={containerStyles["col-center"]}
      backgroundStyle={backgroundStyles["glass-20"]}
        borderStyle={`${borderStyles["rounded"]}`}
      contentStyle="overflow-auto"
    >
      {children}
    </Layer>
  );
}
