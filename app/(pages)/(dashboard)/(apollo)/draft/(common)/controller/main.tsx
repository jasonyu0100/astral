import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
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
      sizeStyle="h-full flex-grow"
      effectStyle={effectStyles["glow-md"]}
      containerStyle={containerStyles["col"]}
      backgroundStyle={backgroundStyles["glass-5"]}
    >{children}</Layer>
  );
}
