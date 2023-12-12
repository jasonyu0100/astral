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
      sizeStyle="h-[700px] w-[500px]"
      containerStyle={containerStyles["col-center"]}
      backgroundStyle={backgroundStyles["glass-20"]}
        borderStyle={`${borderStyles["rounded-r"]}`}
      contentStyle="overflow-auto"
    >
      {children}
    </Layer>
  );
}
