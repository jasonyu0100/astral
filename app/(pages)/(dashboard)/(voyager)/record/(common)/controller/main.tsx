import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function ReleaseController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={ReleaseController.name}
      sizeStyle="h-full flex-grow"
      backgroundStyle={backgroundStyles["glass-5"]}
      containerStyle={containerStyles["col-center"]}
    >
      {children}
    </Layer>
  );
}
