import { containerStyles } from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function SeaController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      sizeStyle="w-full h-full"
      displayName={SeaController.name}
      containerStyle={containerStyles["row-center"]}
    >
      {children}
    </Layer>
  );
}
