import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export default function FlowController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowController.name}
      sizeStyle="h-full flex-grow"
      containerStyle={containerStyles["col"]}
      backgroundStyle={backgroundStyles["glass-5"]}
      contentStyle="p-[1rem]"
    >
      {children}
    </Layer>
  );
}
