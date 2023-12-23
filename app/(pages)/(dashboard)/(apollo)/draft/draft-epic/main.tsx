import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
  effectStyles,
} from "@/(pages)/(common)/styles/data";

export default function DraftController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftController.name}
      sizeStyle="h-full flex-grow"
      effectStyle={effectStyles["glow-md"]}
      containerStyle={containerStyles["col"]}
      backgroundStyle={backgroundStyles["glass-5"]}
      contentStyle="p-[1rem]"
    >{children}</Layer>
  );
}
