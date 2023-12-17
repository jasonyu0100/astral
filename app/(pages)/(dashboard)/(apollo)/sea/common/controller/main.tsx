import { containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

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
      contentStyle="space-x-[40px]"
    >
      {children}
    </Layer>
  );
}
